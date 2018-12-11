import * as React from 'react';
import classNames from 'classnames';

import Badge from '../Badge/Badge';

const baseClass = 'gc-list';

export type ListTypes = 'stripped';

interface Props {
  type?: ListTypes;
  items: any;
  title?: any;
  counter?: boolean;
  hint?: any;
  empty?: any;
  children: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

class List extends React.PureComponent<Props> {
  static defaultProps: Props = {
    items: null,
    title: null,
    hint: null,
    empty: null,
    children: null,
    counter: true,
    onClick: value => value,
  };

  handleClick: React.MouseEventHandler<HTMLElement> = e => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      type,
      items,
      title,
      hint,
      empty,
      counter,
      children,
      className,
    } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      className
    );

    const isEmpty = !items && !children;
    const count = parseInt(
      (items && items.length) || (children && children.length),
      10
    );

    return (
      <dl className={classes}>
        {isEmpty && (
          <React.Fragment>
            {title && (
              <dt className={`${baseClass}__header`}>
                {title && (
                  <strong className={`${baseClass}__title`}>{title}</strong>
                )}
              </dt>
            )}
            <dd className={`${baseClass}__empty`}>{empty}</dd>
          </React.Fragment>
        )}
        {!isEmpty && (
          <React.Fragment>
            {(title || counter) && (
              <dt className={`${baseClass}__header`}>
                {title && (
                  <strong className={`${baseClass}__title`}>{title}</strong>
                )}
                {counter &&
                  count > 0 && (
                    <Badge spacing="left" className={`${baseClass}__count`}>
                      {count}
                    </Badge>
                  )}
                {hint && <small className={`${baseClass}__hint`}>{hint}</small>}
              </dt>
            )}
            {(items || children).map((item: any, index: number) => (
              <dd
                key={item.key || index}
                className={`${baseClass}__item`}
                onClick={this.handleClick}
                role="presentation">
                {item}
              </dd>
            ))}
          </React.Fragment>
        )}
      </dl>
    );
  }
}

export default List;
