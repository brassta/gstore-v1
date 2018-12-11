import * as React from 'react';
import classNames from 'classnames';

const progresSizes = {
  small: 20,
  medium: 40,
  large: 80,
};

interface Props {
  size?: keyof typeof progresSizes;
  value: number;
  message?: string;
  className?: string;
}

const baseClass = 'gc-progress--circular';

class CircularProgress extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    size: 'medium',
    value: 0,
    message: '',
  };

  render() {
    const { value, message, className } = this.props;
    const size = progresSizes[this.props.size!];
    const stroke = Math.round(size / 10);

    const classes = classNames(
      baseClass,
      size && `${baseClass}--${this.props.size}`,
      className
    );

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (size - stroke) / 2;
    // enclose cicle in a circumscribing square
    const viewBox = `0 0 ${size} ${size}`;
    // arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * value) / 100;

    return (
      <span className={classes}>
        <svg width={size} height={size} viewBox={viewBox}>
          <circle
            className={`${baseClass}__background`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${stroke}px`}
          />
          <circle
            className={`${baseClass}__progress`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={`${stroke}px`}
            // start progress marker at 12 O'Clock
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          {value < 100 && (
            <text
              className={`${baseClass}__text`}
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle">
              {`${value}%`}
            </text>
          )}
          {value === 100 && (
            <path
              className={`${baseClass}__tick`}
              d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              transform={`translate(${size / 5},${size / 5}) scale(${size /
                40})`}
            />
          )}
        </svg>
        {message && <span className={`${baseClass}__message`}>{message}</span>}
      </span>
    );
  }
}

export default CircularProgress;
