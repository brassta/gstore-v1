import * as React from 'react';
import classNames from 'classnames';

type BadgeTypes = 'active' | 'inactive';

type BadgeSizes = 'small';

type BadgeSpacing = 'left' | 'right';

interface Props {
  type?: BadgeTypes;
  size?: BadgeSizes;
  spacing?: BadgeSpacing;
  children: any;
  className?: string;
}

const baseClass = 'gc-badge';

const Badge: React.SFC<Props> = props => {
  const { children, type, size, spacing, className } = props;

  const classes = classNames(
    baseClass,
    type && `${baseClass}--${type}`,
    size && `${baseClass}--${size}`,
    spacing && `${baseClass}--${spacing}`,
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Badge;
