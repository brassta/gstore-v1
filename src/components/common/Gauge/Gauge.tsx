import * as React from 'react';
import { Donut } from 'gaugeJS';
import classNames from 'classnames';

interface Props {
  value: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  className: string;
}

const baseClass = 'gc-gauge';

class Gauge extends React.PureComponent<Props> {
  canvas = React.createRef<HTMLCanvasElement>();
  style = getComputedStyle(document.body);

  getVar(name: string) {
    return this.style.getPropertyValue(`--${baseClass}--${name}`);
  }

  componentDidMount() {
    const color = this.getVar('color');
    const background = this.getVar('background');

    const { min = 0, max = 10, value = 0 } = this.props;

    const opts = {
      angle: 0.25,
      lineWidth: 0.05,
      radiusScale: 1,
      limitMax: false, // If false, max value increases automatically if value > maxValue
      limitMin: false, // If true, the min value of the gauge will be fixed
      colorStart: color,
      colorStop: color,
      shadowColor: background,
      strokeColor: background,
      strokeWidth: 0,
      generateGradient: false,
      highDpiSupport: true,
    };

    const gauge = new Donut(this.canvas.current!).setOptions(opts);

    gauge.maxValue = max;
    gauge.setMinValue(min);
    gauge.animationSpeed = 36;
    gauge.set(value);
  }

  render() {
    const width = this.getVar('width');
    const height = this.getVar('height');

    const { className } = this.props;

    const classes = classNames(baseClass, className);

    return (
      <canvas
        ref={this.canvas}
        width={width}
        height={height}
        className={classes}
      />
    );
  }
}

export default Gauge;
