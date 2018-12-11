import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-section';

interface Props {
  children?: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Section: React.SFC<Props> = props => {
  const { children, className } = props;

  const classes = classNames(baseClass, className);

  const handleClick = (e: any) => {
    const { onClick } = props;

    e.preventDefault();

    onClick && onClick(e);
  };

  return (
    <section className={classes} onClick={handleClick} role="presentation">
      {children}
    </section>
  );
};

export default Section;
