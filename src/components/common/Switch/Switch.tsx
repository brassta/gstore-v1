import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-switch';

interface Props {
  id?: string;
  name?: string;
  value?: any;
  title?: string;
  checked: boolean;
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
  onChange?: (checked: boolean) => void;
}

interface State {
  checked: boolean;
}

class Switch extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    value: '',
    checked: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = { checked: !!this.props.checked };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { onChange } = this.props;

    this.setState({ checked: e.currentTarget.checked }, () => {
      onChange && onChange(this.state.checked);
    });
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
        type="checkbox"
        role="switch"
        id={id}
        name={name}
        value={value}
        title={title}
        checked={this.state && this.state.checked}
        aria-checked={this.state && this.state.checked}
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

export default Switch;
