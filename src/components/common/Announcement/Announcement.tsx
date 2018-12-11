import * as React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';

const baseClass = 'gc-announcement';

type AnnouncementTypes = 'success' | 'info' | 'warning' | 'error';

interface Props {
  id?: any;
  type?: AnnouncementTypes;
  onClose?: (id: any) => void;
  children: any;
  className?: string;
}

interface State {
  hidden: boolean;
}

class Announcement extends React.PureComponent<Props, State> {
  state = { hidden: false };

  handleClose = () => {
    const { id = Symbol('Announcement'), onClose } = this.props;

    this.setState({ hidden: true }, () =>
      setTimeout(() => onClose && onClose(id), 200)
    );
  };

  render() {
    const { type, children, className } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      className
    );

    return (
      <div className={classes} aria-hidden={this.state.hidden} role="alert">
        <div className={`${baseClass}__message`}>{children}</div>
        <Button
          className={`${baseClass}__close`}
          tabIndex={-1}
          onClick={this.handleClose}>
          Close
        </Button>
      </div>
    );
  }
}

export default Announcement;
