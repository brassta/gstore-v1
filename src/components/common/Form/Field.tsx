import * as React from 'react';
import classNames from 'classnames';

import Label from '../Label/Label';
import Input from '../Input/Input';
// TODO@prebla: Add Password
// import Password from '../Password/Password';
import Search from '../Search/Search';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
import Dropdown from '../Dropdown/Dropdown';
import Radio, { RadioGroup, RadioArray } from '../Radio';
import Checkbox from '../Checkbox/Checkbox';
import Switch from '../Switch/Switch';
import Output, { OutputFormats } from '../Output/Output';
import InputGroup from './InputGroup';

type FieldStatus = 'success' | 'warning' | 'error' | null;

type FieldSizes = 'small' | 'large';

type FieldWidths = 'auto' | 'wide' | 'full';

const inputTypes = {
  text: Input,
  output: Output,
  password: Input,
  search: Search,
  number: Input,
  email: Input,
  select: Select,
  dropdown: Dropdown,
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
  textarea: Textarea,
};

export type InputTypesT = keyof typeof inputTypes;

type InputT = {
  name: string;
  value: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: any) => void;
  onDragStart?: () => void;
  onDrop?: () => void;
};

type MetaT = {
  form: string;
  error?: string;
  warning?: string;
  active: boolean;
  autofilled: boolean;
  asyncValidating: boolean;
  dirty: boolean;
  initial: any;
  invalid: boolean;
  pristine: boolean;
  submitting: boolean;
  submitFailed: boolean;
  touched: boolean;
  valid: boolean;
  visited: boolean;
  dispatch: () => void;
};

// TODO@all: Aggregate prop types from all input types.
// TODO@all: Fix possible empty input field.
type PropsT = {
  input?: InputT;
  meta?: MetaT;
  type?: InputTypesT;
  id?: string;
  name?: string;
  disabled?: boolean;
  hint?: any;
  help?: any;
  prefix?: any;
  sufix?: any;
  label?: string;
  status?: FieldStatus;
  message?: string;
  format?: OutputFormats;
  inline?: boolean;
  options?: {} | Array<{ value: string; text: string }>;
  multiple?: boolean | RadioArray;
  selected?: any;
  toggle?: boolean;
  ref?: (node: any) => void;
  size?: FieldSizes;
  width?: FieldWidths;
  title?: string;
  className?: string;
  placeholder?: any;
  checked?: boolean;
  value?: any;
  defaultValue?: any;
  onChange?: (value: any) => void;
};

const baseClass = 'gc-form-group';

const omit = (obj: any, keys: string[]) =>
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce((newObj, [key, val]) => Object.assign(newObj, { [key]: val }), {});

class FormField extends React.PureComponent<PropsT> {
  render() {
    const {
      input,
      meta,
      type = 'text',
      id,
      disabled,
      hint,
      help,
      label,
      message,
      format,
      inline,
      multiple,
      selected,
      size,
      width,
      prefix,
      sufix,
      className,
    } = this.props;

    const isTogglable = type === 'checkbox' || type === 'switch';

    const isRadio = type === 'radio';

    const hasAddon = this.props.sufix;

    const isOutput = type === 'output';

    const InputField = inputTypes[type];

    const error =
      meta && !meta.active && meta.touched && meta.error ? meta.error : message;

    const status = error ? 'error' : this.props.status;

    const inputProps = omit(
      {
        ...this.props,
        ...input,
        status,
      },
      ['input', 'prefix', 'sufix', 'hint', 'help', 'message', 'inline']
    );

    const classes = classNames(
      baseClass,
      status && `${baseClass}--${status}`,
      size && `${baseClass}--${size}`,
      width && `${baseClass}--${width}`,
      prefix && `${baseClass}--prefix`,
      inline && `${baseClass}--inline`,
      type === 'checkbox' && `${baseClass}--checkbox`,
      type === 'switch' && `${baseClass}--switch`,
      isRadio && `${baseClass}--radio`,
      hasAddon && `${baseClass}--sufix`,
      className
    );

    return (
      <div className={classes}>
        {!isTogglable &&
          !isRadio &&
          !isOutput && (
            <Label {...this.props} id={id} text={label} disabled={disabled}>
              <InputGroup
                size={size}
                prefix={prefix}
                input={<InputField {...inputProps} />}
                sufix={sufix}
                hint={hint}
                help={help}
                error={error}
              />
            </Label>
          )}

        {!isTogglable &&
          !isRadio &&
          isOutput && (
            <Label {...this.props} id={id} text={label} disabled={disabled}>
              <Output
                {...inputProps}
                id={id}
                name={input && input.name}
                value={input && input.value}
                format={format}
                width={width}
              />
            </Label>
          )}

        {isTogglable &&
          !isRadio && (
            <Label {...this.props} id={id} text={label} disabled={disabled}>
              <InputField {...inputProps} />
              {hint && <div className="gc-input__hint">{hint}</div>}
              {error && <div className="gc-input__message">{error}</div>}
            </Label>
          )}

        {!isTogglable &&
          isRadio && (
            <RadioGroup
              {...inputProps}
              // @ts-ignore
              multiple={multiple}
              selected={selected}
              disabled={disabled}
              inline={inline}>
              {hint && !error && <div className="gc-input__hint">{hint}</div>}
              {error && <div className="gc-input__message">{error}</div>}
            </RadioGroup>
          )}
      </div>
    );
  }
}

export default FormField;
