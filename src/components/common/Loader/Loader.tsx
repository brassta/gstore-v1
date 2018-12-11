import * as React from 'react';
import classNames from 'classnames';

type LoaderTypes = 'buggy';

type LoaderSizes = 'small';

const baseClass = 'gc-loader';

interface Props {
  children?: any;
  type?: LoaderTypes;
  size?: LoaderSizes;
  textual?: boolean;
  className?: string;
}

const Loader: React.SFC<Props> = props => {
  const { type, size, textual, children, className } = props;

  const classes = classNames(
    baseClass,
    type && `${baseClass}--${type}`,
    size && `${baseClass}--${size}`,
    textual && `${baseClass}--textual`,
    className
  );

  return (
    <span className={classes}>
      {children}
      <span className={`${baseClass}__dot`}>.</span>
      <span className={`${baseClass}__dot`}>.</span>
      <span className={`${baseClass}__dot`}>.</span>
    </span>
  );
};

export default Loader;
