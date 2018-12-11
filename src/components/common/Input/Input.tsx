import * as React from 'react';
import classNames from 'classnames';

import { InputTypesT } from '../Form/Field';

const baseClass = 'gc-input';

type InputSizes = 'small' | 'large';

type InputWidths = 'auto' | 'wide' | 'full';

type InputStatuses = 'error' | 'warning' | 'info' | 'success';

interface Props {
  type?: InputTypesT;
  id?: string;
  name?: string;
  value?: any;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  pattern?: string;
  status?: InputStatuses;
  tabIndex?: number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  size?: InputSizes;
  width?: InputWidths;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: any) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

interface State {
  value: any;
}

class Input extends React.PureComponent<Props, State> {
  static defaultProps = {
    type: 'text',
    value: '',
  };

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.value };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    const { type, onKeyDown } = this.props;

    if (type === 'number') {
      const specials = [
        46, // delete
        8, // backspace
        9, // tab
        27, // esc
        13, // enter
        110, // decimal point
        189, // minus
        190, // period
      ];

      const clipboard = [
        65, // a
        67, // e
        86, // v
      ];

      const {
        keyCode: code,
        ctrlKey: ctrl,
        shiftKey: shift,
        metaKey: command,
      } = e;

      if (
        specials.indexOf(code) > -1 ||
        ((ctrl || command) && clipboard.indexOf(code) > -1) ||
        (code >= 35 && code <= 40) // end, home, left, up, right, down
      ) {
        return; // let it happen
      }

      if ((shift || (code < 48 || code > 57)) && (code < 96 || code > 105)) {
        e.preventDefault(); // shift, not (numpad) numbers
      }
    }

    onKeyDown && onKeyDown(e);
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props;

    this.setState({ value: e.currentTarget.value }, () => {
      onChange && onChange(this.state.value);
    });
  };

  render() {
    const {
      type,
      id,
      name,
      defaultValue,
      placeholder,
      title,
      pattern,
      tabIndex,
      minLength,
      maxLength,
      min,
      max,
      disabled,
      readOnly,
      hidden,
      required,
      autoFocus,
      status,
      size,
      width,
      inputRef,
      className,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
    } = this.props;

    const classes = classNames(
      baseClass,
      width && `${baseClass}--${width}`,
      size && `${baseClass}--${size}`,
      status && `${baseClass}--${status}`,
      className
    );

    return (
      <input
        type={type}
        id={id}
        name={name}
        value={this.state.value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        title={title}
        pattern={pattern}
        tabIndex={tabIndex}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        disabled={disabled}
        readOnly={readOnly}
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
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default Input;
