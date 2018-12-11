import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-checkbox';

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
  onChange?: (checked: boolean) => void;
  className?: string;
}

interface State {
  checked: boolean;
}

class Checkbox extends React.PureComponent<Props, State> {
  static defaultProps = {
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

  handleChange = (e: any) => {
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
    } = this.props;

    const classes = classNames(baseClass, className);

    return (
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        title={title}
        checked={this.state.checked}
        tabIndex={tabIndex}
        disabled={disabled}
        hidden={hidden}
        required={required}
        autoFocus={autoFocus}
        ref={inputRef}
        onChange={this.handleChange}
        className={classes}
      />
    );
  }
}

export default Checkbox;
