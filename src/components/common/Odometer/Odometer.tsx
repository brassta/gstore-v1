import * as React from 'react';
import classNames from 'classnames';
import Odometer from 'odometer';

interface Props {
  className?: string;
  animation?: boolean;
  auto?: boolean;
  duration?: number;
  format?: string;
  selector?: string;
  theme?: string;
  value: number;
}

const baseClass = 'gc-odometer';

class ReactOdometer extends React.PureComponent<Props> {
  node: any;
  odometer: Odometer;

  componentDidMount() {
    const {
      value,
      auto = false,
      selector,
      animation,
      format,
      duration,
      theme,
    } = this.props;

    this.odometer = new Odometer({
      el: this.node,
      value,
      auto,
      selector,
      animation,
      format,
      duration,
      theme,
    });
  }

  componentDidUpdate() {
    this.odometer.update(this.props.value);
  }

  render() {
    const { className, ...props } = this.props;

    const classes = classNames(baseClass, className);

    return (
      <div
        {...props}
        className={classes}
        ref={node => {
          this.node = node;
        }}
      />
    );
  }
}

export default ReactOdometer;
