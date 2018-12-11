import * as React from 'react';
import classNames from 'classnames';
import IconAvatar from '@images/icon-avatar.svg';

const baseClass = 'gc-avatar';

type AvatarSizes = 'small' | 'medium' | 'large';

interface Props {
  src?: string;
  size?: AvatarSizes;
  title?: string;
  className?: string;
}

const Avatar: React.SFC<Props> = props => {
  const { src, size, title, className } = props;
  const classes = classNames(
    baseClass,
    size && `${baseClass}--${size}`,
    className
  );

  return (
    <div className={classes} title={title}>
      {src && <img src={src} alt={title} />}
      {!src && <IconAvatar />}
    </div>
  );
};

export default Avatar;
