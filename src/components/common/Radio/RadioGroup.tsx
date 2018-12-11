import * as React from 'react';
import classNames from 'classnames';

import Radio from './Radio';
import Label from '../Label/Label';

const baseClass = 'gc-radiogroup';

export type RadioArray = Array<{
  value: string;
  label: string;
  hint?: any;
  disabled?: boolean;
}>;

interface RadioProps {
  key: string;
  value: string;
  label?: string;
  disabled?: boolean;
  hint?: any;
  selected: any;
  children?: any;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

interface Props {
  name: string;
  value: any;
  label?: string;
  hint?: any;
  selected: any;
  multiple?: RadioArray;
  tabIndex?: number;
  disabled?: boolean;
  hidden?: boolean;
  inline?: boolean;
  autoFocus?: boolean;
  children: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: any) => void;
}

interface State {
  selected: any;
}

class RadioGroup extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    selected: '',
    inline: true,
  };

  constructor(props: Props) {
    super(props);

    this.state = { selected: this.props.selected || '' };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({ selected: nextProps.selected });
    }
  }

  handleChange = (value: any) => {
    const { onChange } = this.props;

    this.setState({ selected: value }, () => {
      onChange && onChange(value);
    });
  };

  createRadio(props: RadioProps) {
    const { name } = this.props;

    const {
      key,
      value,
      label = '',
      disabled,
      hint = '',
      selected,
      children,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
    } = props;

    const checked = !!selected;

    return (
      <Label {...this.props} disabled={disabled} text={label} key={key}>
        <Radio
          name={name}
          value={value}
          selected={checked}
          onChange={this.handleChange}
          onBlur={onBlur}
          onDragStart={onDragStart}
          onDrop={onDrop}
          onFocus={onFocus}
        />
        {children}
        {hint && <div className="gc-input__hint">{hint}</div>}
      </Label>
    );
  }

  render() {
    const { multiple, inline, children, className } = this.props;

    const classes = classNames(
      baseClass,
      inline && `${baseClass}--inline`,
      'gc-fieldset',
      className
    );

    let Group = null;

    // multiple choices
    if (multiple) {
      const radios = multiple.map(radio => {
        const { value, label, hint = '', disabled } = radio;
        const selected = value === this.state.selected;

        return this.createRadio({
          value,
          label,
          hint,
          selected,
          disabled,
          key: `option-${Math.floor(Math.random() * 1000000)}`,
        });
      });

      Group = (
        <fieldset className={classes}>
          {radios}
          {children}
        </fieldset>
      );
    } else {
      // single radio
      const {
        value,
        label,
        selected = false,
        hint = '',
        disabled,
      } = this.props;

      Group = this.createRadio({
        value,
        label,
        hint,
        selected,
        disabled,
        children,
        key: `option-${Math.floor(Math.random() * 1000000)}`,
      });
    }

    return Group;
  }
}

export default RadioGroup;
