import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-input';

type InputWidths = 'small' | 'wide' | 'full';

interface Props {
  id?: string;
  name?: string;
  value?: string;
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
  width?: InputWidths;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onDragStart?: React.DragEventHandler<HTMLInputElement>;
  onDrop?: React.DragEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: string | undefined) => void;
}

interface State {
  value: string | undefined;
}

class Search extends React.PureComponent<Props, State> {
  static defaltProps: Partial<Props> = {
    value: '',
  };

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.value || '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props;

    this.setState({ value: e.currentTarget.value }, () => {
      onChange && onChange(this.state.value);
    });
  }

  render() {
    const {
      id,
      name,
      defaultValue,
      placeholder,
      title,
      status,
      tabIndex,
      minLength,
      maxLength,
      disabled,
      readOnly,
      hidden,
      required,
      autoFocus,
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
      'gc-search',
      width && `${baseClass}--${width}`,
      status && `${baseClass}--${status}`,
      className
    );

    return (
      <input
        type="search"
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

export default Search;
