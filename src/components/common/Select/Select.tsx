import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-select';

type SelectTypes = 'icon' | 'inline';

type SelectWidths = 'fixed' | 'full';

/**
 * Creates a single option element
 *
 * @param {Object} key
 * @param {string} value
 * @param {string} text
 * @returns {React.Element}
 */
const createOption = ({
  key,
  value,
  text,
}: {
  key: string;
  value: any;
  text: string;
}) => (
  <option
    key={key || value || `option-${Math.floor(Math.random() * 1000000)}`}
    value={value}>
    {text}
  </option>
);

/**
 * Creates an option group with option elements
 *
 * @param {string} label
 * @param {Object} options
 * @returns {React.Element}
 */
const createOptgroup = (label: any, options: any) => {
  const children: any[] = [];
  const keys = Object.keys(options);

  keys.forEach(key =>
    // $FlowIssue
    children.push(createOption({ key, value: key, text: options[key] }))
  );

  return (
    <optgroup key={`optgroup-${Math.random()}`} label={label}>
      {children}
    </optgroup>
  );
};

/**
 * Creates an array of option elements
 *
 * @param {Object | Array<{value: string, text: string>} options
 * @returns {Array<React.Element>}
 */
const createOptions = (options: any) => {
  const result: any[] = [];
  // $FlowIssue
  const keys = Object.keys(options);

  // simple array of { value, text } options:
  // [
  //   { value: 'SR', text: 'Serbia' },
  //   { value: 'BG': text: 'Bulgaria' },
  //   { value: 'RU', text: 'Russia' }
  // ]
  if (Array.isArray(options)) {
    options.forEach(({ value, text }) =>
      // $FlowIssue
      result.push(createOption({ key: value, value, text }))
    );
  } else {
    // object literal:
    // - for simple options:
    //   {
    //     'SR': 'Serbia',
    //     'BG': 'Bulgaria',
    //     'RU': 'Russia',
    //     'CN': 'China'
    //   }
    // - for nested options (optgroup)
    //   {
    //     'Europe': {
    //       'SR': 'Russia',
    //       'BG': 'Bulgaria',
    //       'RU': 'Russia'
    //     },
    //     'Asia': {
    //       'CN': 'China'
    //     }
    //   }
    keys.forEach(key => {
      // $FlowIssue
      const value = options[key];

      // optgroup: {
      // - 'value' becomes a 'label' of the optgroup
      // - 'text' becomes the 'options' of the optgroup
      if (typeof value === 'object') {
        result.push(createOptgroup(key, value));
      } else {
        // simple options: { value1: text1, value2: text2, ... valueN: textN }
        // $FlowIssue
        result.push(createOption({ key, value: key, text: value }));
      }

      return result;
    });
  }

  return result;
};

interface Props {
  type?: SelectTypes;
  id?: string;
  name?: string;
  title?: string;
  options: {} | Array<{ value: string; text: string }>;
  selected?: any;
  tabIndex?: number;
  multiple?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
  width?: SelectWidths;
  inputRef?: any;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onDragStart?: React.DragEventHandler<HTMLSelectElement>;
  onDrop?: React.DragEventHandler<HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: any) => void;
}

interface State {
  value: any;
}

/**
 * Select functional component
 *
 * @param {PtopsT} props
 * @param {ContextT} context
 * @returns {React.Element}
 * @constructor
 */
class Select extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    selected: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = { value: this.props.selected };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({ value: nextProps.selected });
    }
  }

  handleChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
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
      title,
      multiple,
      tabIndex,
      disabled,
      hidden,
      readOnly,
      autoFocus,
      required,
      options,
      inputRef,
      width,
      className,
      onBlur,
      onDragStart,
      onDrop,
      onFocus,
    } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      width && `${baseClass}--${width}`,
      className
    );

    return (
      <select
        multiple={multiple}
        id={id}
        name={name}
        title={title}
        tabIndex={tabIndex}
        disabled={disabled}
        hidden={hidden}
        // @ts-ignore
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        value={this.state.value}
        ref={inputRef}
        className={classes}
        onChange={this.handleChange}
        onBlur={onBlur}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onFocus={onFocus}>
        {createOptions(options)}
      </select>
    );
  }
}

export default Select;
