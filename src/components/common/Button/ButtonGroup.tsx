import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-button-group';

export type ButtonGroupTypes = 'compact' | 'separate';

export type ButtonGroupAlign = 'left' | 'center' | 'right' | 'justify';

export type ButtonGroupSizes = 'small' | 'medium' | 'large';

export type ButtonGroupWidths = 'wide' | 'full';

interface Props {
  children: any;
  type?: ButtonGroupTypes;
  align?: ButtonGroupAlign;
  size?: ButtonGroupSizes;
  width?: ButtonGroupWidths;
  className?: string;
  disabled?: boolean;
}

const ButtonGroup: React.SFC<Props> = props => {
  const {
    children,
    type = 'compact',
    align,
    size,
    width,
    className,
    disabled,
  } = props;

  const classes = classNames(
    baseClass,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`,
    width && `${baseClass}--${width}`,
    size && `${baseClass}--${size}`,
    className
  );

  return (
    // @ts-ignore
    <div disabled={disabled} className={classes}>
      {children}
    </div>
  );
};

export default ButtonGroup;
