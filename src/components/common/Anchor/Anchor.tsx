import * as React from 'react';
import classNames from 'classnames';

type LinkTypes = 'button' | '';

type LinkTargets = '_blank' | '';

const baseClass = 'gc-link';

interface Props {
  name?: string;
  href: string;
  rel?: string;
  target?: LinkTargets;
  type?: LinkTypes;
  className?: string;
  disabled?: boolean;
}

const Anchor: React.SFC<Props> = props => {
  const { children, href, rel, target, type, className } = props;
  const rels = classNames('noopener', 'noreferrer', rel);
  const isButton = type && type === 'button';
  const role = isButton ? 'button' : undefined;

  const classes = classNames(isButton ? 'gc-button' : baseClass, className);

  return (
    <a
      {...props}
      type={undefined}
      href={href}
      rel={rels}
      target={target}
      role={role}
      className={classes}>
      {children}
    </a>
  );
};

export default Anchor;
