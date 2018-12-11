import * as React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import classNames from 'classnames';

import uuid from 'src/utilities/uuid';

type DropdownWidths = 'full';
type DropdownTypes = 'icon' | 'inline';
type DropdownAlignment = 'right' | 'left';

type Handler = (e: any) => void;

interface Divider {
  divider: boolean;
}

interface Option {
  id: string;
  text: string;
  item?: any;
  href?: string;
  icon?: any;
  disabled?: boolean;
  onChange?: Handler;
}

interface Props {
  options: Array<Option | Divider>;
  id?: string;
  title?: any;
  type?: DropdownTypes;
  align?: DropdownAlignment;
  width?: DropdownWidths;
  noCaret?: boolean;
  onChange?: Handler;
  className?: string;
}

const baseClass = 'gc-dropdown';

const createOption = (option: any) => {
  const { id = uuid(), item, text, divider, href, disabled, onChange } = option;

  return !divider ? (
    <MenuItem
      key={id}
      eventKey={item}
      href={href}
      disabled={disabled}
      onSelect={(val: any) => onChange && onChange(val)}>
      {text}
    </MenuItem>
  ) : (
    <MenuItem key={id} divider />
  );
};

const createOptions = (options: Array<Option | Divider>, onChange?: Handler) =>
  options.map(option => createOption({ ...option, onChange }));

class Dropdown extends React.PureComponent<Props> {
  render() {
    const {
      id = uuid(),
      options,
      className,
      onChange,
      title,
      width,
      type,
      align,
      noCaret = false,
    } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      width && `${baseClass}--${width}`,
      align && `${baseClass}--${align}`,
      noCaret && `${baseClass}--no-caret`,
      className
    );

    return (
      <DropdownButton title={title} id={id} bsClass={classes} noCaret>
        {createOptions(options, onChange)}
      </DropdownButton>
    );
  }
}

export default Dropdown;
