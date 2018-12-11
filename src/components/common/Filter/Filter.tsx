import * as React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';

const baseClass = 'gc-filter';

export type FilterSizes = 'small' | 'large';

export type FilterWidths = 'full';

export type FilterChoices = Array<{
  value: any;
  label: string;
  disabled?: boolean;
}>;

interface Props {
  choices: FilterChoices;
  selected?: any;
  size?: FilterSizes;
  width?: FilterWidths;
  disabled?: boolean;
  onChange?: (value: any) => void;
  className?: string;
}

interface State {
  selected: any; // active filter
}

class Filter extends React.PureComponent<Props, State> {
  static defaultProps = {
    onChange: (value: any) => value,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      selected: props.selected,
    };
  }

  handleClick = (e: any) => {
    e.persist();

    const { value } = e.currentTarget;

    this.setState(state => {
      const { onChange } = this.props;

      if (onChange) {
        onChange(value);
      }

      return {
        ...state,
        selected: value,
      };
    });
  };

  render() {
    const { choices, size, width, className, disabled } = this.props;

    const classes = classNames(
      baseClass,
      width && `${baseClass}--${width}`,
      size && `${baseClass}--${size}`,
      className
    );

    return (
      <div
        // @ts-ignore
        disabled={disabled}
        className={classes}>
        {choices.map(choice => {
          const { value, label, disabled: disabledChoice = false } = choice;

          return (
            <Button
              key={value}
              value={value}
              pressed={value === this.state.selected}
              disabled={disabledChoice}
              onClick={this.handleClick}>
              {label}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default Filter;
