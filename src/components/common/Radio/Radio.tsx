import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-radio';

interface Props {
  id?: string;
  name?: string;
  value?: any;
  title?: string;
  selected?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  hidden?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: any) => void;
}

class Radio extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    selected: false,
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    const { value, onChange } = this.props;

    onChange && onChange(value);
  };

  render() {
    const {
      id,
      name,
      value,
      title,
      tabIndex,
      disabled,
      hidden,
      required,
      autoFocus,
      selected,
      inputRef,
      className,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
    } = this.props;

    const classes = classNames(baseClass, className);

    return (
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        title={title}
        defaultChecked={selected}
        tabIndex={tabIndex}
        disabled={disabled}
        hidden={hidden}
        required={required}
        autoFocus={autoFocus}
        ref={inputRef}
        className={classes}
        onChange={this.handleChange}
        onBlur={onBlur}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onFocus={onFocus}
      />
    );
  }
}

export default Radio;
