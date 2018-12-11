import * as React from 'react';
import classNames from 'classnames';

type TagTypes = 'success' | 'warning' | 'alert' | 'info' | 'active';

interface Props {
  children: any;
  type?: TagTypes;
  className?: string;
}

const baseClass = 'gc-tag';

const Tag: React.SFC<Props> = props => {
  const { children, type = '', className } = props;

  const classes = classNames(
    baseClass,
    type && `${baseClass}--${type}`,
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Tag;
