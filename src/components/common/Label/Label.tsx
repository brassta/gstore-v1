import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-label';

type LabelWidths = 'auto' | 'wide' | 'fixed' | 'full';

interface Props {
  id?: string;
  type?: string;
  disabled?: boolean;
  text?: string;
  title?: string;
  width?: LabelWidths;
  children: any;
  className?: string;
}

const Label: React.SFC<Props> = props => {
  const { id, type, disabled, text, title, width, children, className } = props;

  const isTogglable =
    type === 'radio' || type === 'checkbox' || type === 'switch';

  const classes = classNames(
    baseClass,
    isTogglable && `${baseClass}--inline`,
    type === 'radio' && `${baseClass}--radio`,
    type === 'checkbox' && `${baseClass}--checkbox`,
    type === 'switch' && `${baseClass}--switch`,
    width && `${baseClass}--${width}`,
    className
  );

  return (
    // @ts-ignore
    <label className={classes} htmlFor={id} title={title} disabled={disabled}>
      {!isTogglable &&
        text && <span className={`${baseClass}__text`}>{text}</span>}
      {children}
      {isTogglable &&
        text && <span className={`${baseClass}__text`}>{text}</span>}
    </label>
  );
};

export default Label;
