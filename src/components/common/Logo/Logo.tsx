import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-logo';

type LogoSizes = 'small' | 'medium' | 'large';

interface Props {
  text?: string;
  size?: LogoSizes;
  block?: boolean;
  className?: string;
}

const Logo: React.SFC<Props> = props => {
  const { text = 'GC Lite', size, block, className } = props;

  const classes = classNames(
    baseClass,
    size && `${baseClass}--${size}`,
    block && `${baseClass}--block`,
    className
  );

  return (
    <figure className={classes}>
      <figcaption className={`${baseClass}__text`}>{text}</figcaption>
    </figure>
  );
};

export default Logo;
