import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-progress';

type ProgressSizes = 'full';

interface Props {
  size?: ProgressSizes;
  max?: number;
  value?: number;
  message?: string;
  className?: string;
}

const Progress: React.SFC<Props> = props => {
  const { size, value = 0, message, max = 100, className } = props;

  const classes = classNames(
    baseClass,
    size && `${baseClass}--${size}`,
    className
  );

  return (
    <span className={classes} aria-label={message}>
      <progress max={max} value={value}>
        {value}%
      </progress>
    </span>
  );
};

export default Progress;
