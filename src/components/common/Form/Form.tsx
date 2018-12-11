import * as React from 'react';
import classNames from 'classnames';

type FormTypes = 'dialog';

type FormSizes = 'small' | 'medium' | 'large';

interface Props {
  type?: FormTypes;
  size?: FormSizes;
  header?: any;
  footer?: any;
  children: any;
  className?: string;
  onSubmit?: () => void;
}

const baseClass = 'gc-form';

const Header = ({
  align,
  children,
  className,
}: {
  align: string;
  children: any;
  className: any;
}) => {
  const classes = classNames(
    `${baseClass}__header`,
    align && `${baseClass}__header--${align}`,
    className && `${className}`
  );

  return (
    <header className={classes}>
      <h3 className="gc-heading">{children}</h3>
    </header>
  );
};

const Footer = ({
  align,
  children,
  className,
}: {
  align: string;
  children: any;
  className: any;
}) => {
  const classes = classNames(
    `${baseClass}__footer`,
    align && `${baseClass}__footer--${align}`,
    className && `${className}`
  );

  return <footer className={classes}>{children}</footer>;
};

const Messages = ({ children }: { children: any }) => (
  <section className={`${baseClass}__messages`}>{children}</section>
);

const Actions = ({ children }: { children: any }) => (
  <section className={`${baseClass}__actions`}>{children}</section>
);

class Form extends React.PureComponent<Props> {
  static Header: any;
  static Footer: any;
  static Messages: any;
  static Actions: any;

  render() {
    const { type, size, header, footer, className, children } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      size && `${baseClass}--${size}`,
      className
    );

    return (
      <form {...this.props} noValidate className={classes}>
        {header}
        <section className={`${baseClass}__body`}>{children}</section>
        {footer}
      </form>
    );
  }
}

Form.Header = Header;
Form.Footer = Footer;
Form.Messages = Messages;
Form.Actions = Actions;

export default Form;
