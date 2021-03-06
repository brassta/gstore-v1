import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-output';

export type OutputFormats = 'int' | 'boolean' | 'float' | 'string';

type OutputWidths = 'auto' | 'wide' | 'full';

interface Props {
  id?: string;
  name?: string;
  format?: OutputFormats;
  precision?: number;
  value: number | string;
  width?: OutputWidths;
  className?: string;
}

const formatValue = (props: Props) => {
  const { value, precision = 2, format } = props;

  if (format === 'int') {
    // $FlowIssue
    return Number.parseInt(value as string, 10);
  } else if (format === 'float') {
    // $FlowIssue
    return Number.parseFloat(value as string).toFixed(precision);
  } else if (format === 'boolean') {
    return value ? 'true' : 'false';
  }

  return value;
};

const Output: React.SFC<Props> = props => {
  const { id, name, width, className } = props;

  const classes = classNames(
    baseClass,
    width && `${baseClass}--${width}`,
    className
  );

  return (
    <output id={id} name={name} className={classes}>
      {formatValue(props)}
    </output>
  );
};

export default Output;
