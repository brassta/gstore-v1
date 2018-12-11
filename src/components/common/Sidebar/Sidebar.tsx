// TODO@prebla: Implement PortalSidebar without Bootstrap
import * as React from 'react';
import classNames from 'classnames';
import { Modal as BootstrapModal } from 'react-bootstrap';

const baseClass = 'gc-sidebar';

type SidebarTypes = 'compact';

type SidebarAlignment = 'left' | 'right' | 'center';

type SidebarPosition = 'left' | 'right';

interface Props {
  id?: string;
  children: any;
  backdrop?: boolean | string;
  align?: SidebarAlignment;
  show: boolean;
  position?: SidebarPosition;
  type?: SidebarTypes;
  onHide: (id: symbol | string) => void;
  className?: string;
}

const Panel: React.SFC<Props> = props => {
  const { position = 'right' } = props;

  return (
    <BootstrapModal.Dialog
      {...props}
      // @ts-ignore
      align={null}
      position={null}
      bsClass={baseClass}
      data-position={position}
    />
  );
};

const Wrapper: React.SFC<Props> = props => {
  const { type } = props;

  const classes = classNames(
    `${baseClass}__panel`,
    type && `${baseClass}--${type}`
  );

  return (
    <BootstrapModal
      {...props}
      // @ts-ignore
      dialogComponentClass={Panel}
      backdropClassName="gc-sidebar__backdrop"
      dialogClassName={classes}
    />
  );
};

const Header: React.SFC<Props> = props => {
  const { type, align = 'left' } = props;

  const classes = classNames(
    `${baseClass}__header`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`
  );

  return (
    <BootstrapModal.Header
      {...props}
      // @ts-ignore
      type={null}
      align={null}
      bsClass={classes}
    />
  );
};

const Body: React.SFC<Props> = props => {
  const { type, align } = props;

  const classes = classNames(
    `${baseClass}__body`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`
  );

  return (
    <BootstrapModal.Body
      {...props}
      // @ts-ignore
      type={null}
      align={null}
      bsClass={classes}
    />
  );
};

const Footer: React.SFC<Props> = props => {
  const { type, align = 'right' } = props;

  const classes = classNames(
    `${baseClass}__footer`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`
  );

  return (
    <BootstrapModal.Footer
      {...props}
      // @ts-ignore
      type={null}
      align={null}
      componentClass="footer"
      bsClass={classes}
    />
  );
};

class Sidebar extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    position: 'right',
  };

  static Header: any;
  static Body: any;
  static Footer: any;

  constructor(props: Props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { id = Symbol('Sidebar'), onHide } = this.props;

    onHide && onHide(id);
  }

  render() {
    const { show, align, position = 'right', children } = this.props;

    return (
      <Wrapper
        {...this.props}
        show={show}
        align={align}
        position={position}
        // @ts-ignore
        autoFocus
        onHide={this.handleClose}>
        {children}
      </Wrapper>
    );
  }
}

Sidebar.Header = Header;
Sidebar.Body = Body;
Sidebar.Footer = Footer;

export default Sidebar;
