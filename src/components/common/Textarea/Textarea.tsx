import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-textarea';

type TextareaSizes = 'small' | 'large';

type TextareaWidths = 'small' | 'wide' | 'full';

type TextareaStatuses = 'error' | 'warning' | 'info' | 'success';

interface Props {
  id?: string;
  name?: string;
  value?: any;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  status?: TextareaStatuses;
  tabIndex?: number;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  size?: TextareaSizes;
  width?: TextareaWidths;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onDragStart?: React.DragEventHandler<HTMLTextAreaElement>;
  onDrop?: React.DragEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: (value: any) => void;
}

interface State {
  value: any;
}

class Textarea extends React.PureComponent<Props, State> {
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

  handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
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
      <textarea
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
    );
  }
}

export default Textarea;
