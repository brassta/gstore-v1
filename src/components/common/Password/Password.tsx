import * as React from 'react';
import classNames from 'classnames';

import IconEye from '@images/icon-eye.svg';

import Button from '../Button/Button';

const baseClass = 'gc-input';

type PasswordSizes = 'small' | 'large';

type PasswordWidths = 'small' | 'wide' | 'full';

interface Props {
  id?: string;
  name?: string;
  value: string;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  status?: string;
  tabIndex?: number;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  toggle: boolean;
  size?: PasswordSizes;
  width?: PasswordWidths;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: string) => void;
}

interface State {
  value: string;
}

class Password extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    value: '',
  };

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.value };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props;

    this.setState({ value: e.currentTarget.value }, () => {
      onChange && onChange(this.state.value);
    });
  };

  render() {
    const {
      id,
      name,
      defaultValue,
      placeholder,
      title,
      tabIndex,
      minLength,
      maxLength,
      disabled,
      readOnly,
      hidden,
      required,
      autoFocus,
      status,
      width,
      size,
      toggle = false,
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
      <span className={`gc-password ${toggle ? 'gc-password--toggle' : ''}`}>
        <input
          type="password"
          autoComplete="off"
          id={id}
          name={name}
          value={this.state.value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          title={title}
          tabIndex={tabIndex}
          minLength={minLength}
          maxLength={maxLength}
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
        />
        {toggle && (
          <Button size="small" tabIndex={-1} icon={IconEye}>
            Show password
          </Button>
        )}
      </span>
    );
  }
}

export default Password;
