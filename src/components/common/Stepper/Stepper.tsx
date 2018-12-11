import * as React from 'react';
import classNames from 'classnames';

import Button, {
  ButtonGroup,
  ButtonGroupAlign,
  ButtonGroupSizes,
} from '../Button';

const baseClass = 'gc-stepper';

export type StepperStep = {
  name: string;
  component: any;
  buttons?: {
    size?: ButtonGroupSizes;
    align?: ButtonGroupAlign;
    previous?: string;
    next?: string;
    skip?: string;
  };
};

export type StepperSteps = StepperStep[];

export type StepperTypes = 'compact';

interface Props {
  steps: StepperSteps;
  type?: StepperTypes;
  showSteps?: boolean;
  clickableSteps?: boolean;
  showProgress?: boolean;
  showButtons?: boolean;
  preventEnter?: boolean;
  startingStep?: number;
  onNextClick?: (step: StepperStep) => boolean;
  onPreviousClick?: (step: StepperStep) => boolean;
  onSkipClick?: () => void;
  onStepChange?: (prevStep: number, nextStep: number) => void;
  onFinish?: (data: any) => void;
  className?: string;
}

interface State {
  step: any; // current step
  navigation: any; // navigation classes
  data: any; // collected step data
  working: boolean; // is step's internal logic executing
}

class Stepper extends React.Component<Props, State> {
  static defaultProps = {
    showSteps: true,
    clickableSteps: false,
    showProgress: false,
    showButtons: true,
    preventEnter: true,
    startingStep: 0,
    onNextClick: () => true,
    onPreviousClick: () => true,
    onSkipClick: () => true,
    onStepChange: (prevStep: number, nextStep: number) => nextStep,
    onFinish: (data: any) => data,
  };

  stepRef: any;

  constructor(props: Props) {
    super(props);

    this.stepRef = React.createRef();

    this.state = {
      step: props.startingStep,
      navigation: this.getNavigationState(props.startingStep || 0),
      working: false,
      data: [],
    };
  }

  /**
   * Update header navigation classes
   *
   * @param step
   * @returns {{current: *, classes: Array}}
   */
  getNavigationState(step: number) {
    const classes: any = [];

    this.props.steps.forEach((value, index) => {
      if (index < step) {
        classes.push('previous');
      } else if (index === step) {
        classes.push('active');
      } else {
        classes.push('next');
      }
    });

    return { current: step, classes };
  }

  /**
   * Set the navigation state
   *
   * @param nextStep
   */
  setNavigationState(nextStep: number) {
    const numSteps = this.props.steps.length;

    this.setState(state => ({
      ...state,
      navigation: this.getNavigationState(nextStep),
    }));

    if (this.props.onStepChange) {
      this.props.onStepChange(this.state.step, nextStep);
    }

    if (nextStep < numSteps) {
      this.setState(state => ({ ...state, step: nextStep }));
    } else {
      this.working(true);

      if (this.props.onFinish) {
        this.props.onFinish(this.state.data);
      }
    }
  }

  /**
   * Handles keydown on enter being pressed in any Child component input area.
   * In this case it goes to the next (ignore textareas as they should allow line breaks)
   *
   * @param event
   */
  handleKeyDown = (event: any) => {
    if (event.which === 13) {
      if (!this.props.preventEnter && event.target.type !== 'textarea') {
        this.next();
      } else if (event.target.type !== 'textarea') {
        event.preventDefault();
      }
    }
  };

  /**
   * Let child components invoke a direct jump to another step
   *
   * @param event
   */
  jumpToStep = (event: any) => {
    // if a child step wants to invoke a jump between steps, event is the numeric step number and not the JS event
    if (!event.target) {
      const { step } = this.state;

      this.saveData(step);
      this.setNavigationState(event);
    } else {
      const { clickableSteps } = this.props;
      const previous = this.state.step;
      const current = event.target.value;
      const numSteps = this.props.steps.length;
      // console.log('jumpToStep()', current, previous, numSteps);

      // if clickableSteps is turned off or user clicked on existing step again (on step 2 and clicked on 2 again) then ignore
      if (!clickableSteps || current === previous) {
        event.preventDefault();
        event.stopPropagation();

        return;
      }

      // event is a react event so we need to persist it as we deal with aync promises which nullifies these events
      // (https://facebook.github.io/react/docs/events.html#event-pooling)
      event.persist();

      if (current === numSteps - 1 && previous === numSteps - 1) {
        this.setNavigationState(numSteps);
      } else {
        this.setNavigationState(current);
      }
    }
  };

  /**
   * Set working state - enable or disable buttons
   *
   * @param yes
   */
  working(yes: boolean) {
    this.setState(state => ({
      ...state,
      working: yes,
    }));
  }

  /**
   *
   * @param step
   */
  submit = async (step: number) => {
    const { current } = this.stepRef;

    if (!current || !current.submit) {
      return true;
    }

    const isValid = await current.submit();
    // console.log('Stepper.submit()', current, isValid);

    if (current.props.onSubmit) {
      current.props.onSubmit(step, isValid);
    }

    return isValid;
  };

  /**
   *
   */
  saveData(step: number) {
    const { current } = this.stepRef;

    if (!current || !current.state || !current.state.data) {
      return;
    }

    const { data } = this.state;

    data[step] = current.state.data;

    this.setState(state => ({ ...state, ...data }));
    // console.log('saveData()', this.state.data);
  }

  /**
   * Move back
   *
   */
  previous = async () => {
    const { step } = this.state;

    const canMove = await this.props.onPreviousClick!(step);

    if (!canMove) {
      return;
    }

    if (step > 0) {
      this.saveData(step);
      this.setNavigationState(step - 1);
    }
  };

  /**
   * Move forward
   *
   */
  next = async () => {
    const { step } = this.state;

    this.working(true);

    // $FlowIssue
    const canMove = await this.props.onNextClick!(step);
    const isValid = await this.submit(step);

    if (!isValid || !canMove) {
      this.working(false);
      return;
    }

    this.working(false);

    if (this.state.step < this.props.steps.length) {
      this.saveData(step);
      this.setNavigationState(step + 1);
    }
  };

  /**
   * Skip steps
   *
   */
  skip = async () => {
    await this.props.onSkipClick!();
  };

  /**
   * Clone the step component dynamically and tag it as stepRef
   *
   * @returns {*}
   */
  cloneStep() {
    const { component } = this.props.steps[this.state.step];

    const properties = {
      ref: React.isValidElement(component) ? this.stepRef : null,
      jumpToStep: (step: any) => this.jumpToStep(step),
    };

    return React.cloneElement(component, properties);
  }

  /**
   * Render the steps
   *
   * @returns {any[]}
   */
  renderSteps() {
    const { steps } = this.props;

    const stepsClasses = classNames(
      `${baseClass}__steps`,
      this.props.clickableSteps && `${baseClass}__steps--clickable`
    );

    const stepClasses = (index: any) =>
      classNames(
        `${baseClass}__step`,
        `${baseClass}__step--${this.state.navigation.classes[index]}`
      );

    return (
      <ol className={stepsClasses}>
        {steps.map((step, index) => (
          <li
            className={stepClasses(index)}
            onClick={this.jumpToStep}
            key={step.name}
            value={index}
            role="presentation">
            {steps[index].name}
          </li>
        ))}
      </ol>
    );
  }

  /**
   *
   */
  renderIndicator() {
    const { steps } = this.props;

    const indicatorClasses = classNames(
      `${baseClass}__indicator`,
      this.props.clickableSteps && `${baseClass}__indicator--clickable`
    );

    const pageClasses = (index: any) =>
      classNames(
        `${baseClass}__step`,
        `${baseClass}__step--${this.state.navigation.classes[index]}`
      );

    return (
      <ol className={indicatorClasses}>
        {steps.map((step, index) => (
          <li
            className={pageClasses(index)}
            onClick={this.jumpToStep}
            key={step.name}
            value={index}
            role="presentation"
          />
        ))}
      </ol>
    );
  }

  /**
   *
   * @returns {boolean|*}
   */
  renderButtons() {
    const { buttons } = this.props.steps[this.state.step];

    if (!buttons) {
      return null;
    }

    return (
      <ButtonGroup
        type="separate"
        size={buttons.size}
        align={buttons.align}
        className={`${baseClass}__buttons`}>
        {buttons.skip && (
          <Button
            onClick={this.skip}
            className={`${baseClass}__button ${baseClass}__button--skip`}
            disabled={this.state.working}>
            {buttons.skip}
          </Button>
        )}
        {buttons.previous && (
          <Button
            onClick={this.previous}
            className={`${baseClass}__button ${baseClass}__button--previous`}
            disabled={this.state.working}>
            {buttons.previous}
          </Button>
        )}
        {buttons.next && (
          <Button
            type="primary"
            onClick={this.next}
            className={`${baseClass}__button ${baseClass}__button--next`}
            disabled={this.state.working}>
            {buttons.next}
          </Button>
        )}
      </ButtonGroup>
    );
  }

  /**
   * Main render
   *
   * @returns {*}
   */
  render() {
    const {
      type,
      showSteps,
      showProgress,
      showButtons,
      className,
    } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      className
    );

    return (
      <div
        className={classes}
        onKeyDown={this.handleKeyDown}
        role="presentation">
        {showSteps && this.renderSteps()}
        <div className={`${baseClass}__content`}>{this.cloneStep()}</div>
        <footer className={`${baseClass}__footer`}>
          {showProgress && this.renderIndicator()}
          {showButtons && this.renderButtons()}
        </footer>
      </div>
    );
  }
}

export default Stepper;
