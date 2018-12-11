import * as React from 'react';

import Stepper from '@components/Stepper';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

/* tslint:disable:no-console */

export default class Steps extends React.Component {
  private steps: any[];

  constructor(props: any) {
    super(props);

    this.steps = [
      {
        name: 'Mnemonic phrase',
        buttons: {
          align: 'right',
          size: 'large',
          next: "I've written it down",
        },
        component: <Step1 />,
      },
      {
        name: 'Keep your phrase',
        buttons: {
          align: 'justify',
          size: 'large',
          previous: 'Back',
          next: 'I confirm',
        },
        component: <Step2 />,
      },
      {
        name: 'Verify mnemonic',
        buttons: {
          align: 'right',
          size: 'large',
          next: 'Access your wallet',
        },
        component: (
          <Step3
            onSubmit={(step: any, isValid: any) =>
              console.log('Step3.onSubmit()', step, isValid)
            }
          />
        ),
      },
    ];
  }

  /**
   * This will occur before we move forward
   * Return false here to prevent changing step
   *
   * @param prevStep
   * @returns {boolean}
   */
  handleNextClick = (prevStep: any) => {
    console.log(
      'handleNextClick(prevStep)',
      prevStep,
      this.steps[prevStep].component.props
    );
    return true;
  };

  /**
   * This will trigger before moving back
   * Return false here to prevent changing step
   *
   * @param prevStep
   * @returns {boolean}
   */
  handlePreviousClick = (prevStep: any) => {
    console.log(
      'handlePreviousClick(prevStep)',
      prevStep,
      this.steps[prevStep].component.props
    );
    return true;
  };

  /**
   * This will occur after the step has changed
   *
   * @param prevStep
   * @param newStep
   */
  handleStepChange = (prevStep: any, newStep: any) => {
    console.log('onStepChange()', `${prevStep} -> ${newStep}`);
  };

  /**
   * Triggers when all the steps are done
   *
   * @param step
   */
  handleFinish = (data: any) => {
    console.log('onFinish()', data);
  };

  render() {
    return (
      <Stepper
        steps={this.steps}
        // showSteps={true}
        // clickableSteps={true}
        showProgress={true}
        // showButtons={true}
        // preventEnter={false}
        startingStep={0}
        onNextClick={this.handleNextClick}
        onPreviousClick={this.handlePreviousClick}
        onStepChange={this.handleStepChange}
        onFinish={this.handleFinish}
      />
    );
  }
}
