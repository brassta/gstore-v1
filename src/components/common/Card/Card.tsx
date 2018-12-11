import * as React from 'react';
import classNames from 'classnames';

const baseClass = 'gc-card';

export type CardTypes = 'full';

interface Props {
  type?: CardTypes;
  img?: string;
  title?: string;
  caption?: any;
  header?: any;
  details?: any;
  action?: any;
  children?: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

class Card extends React.PureComponent<Props> {
  render() {
    const {
      type,
      img,
      title,
      caption,
      header,
      details,
      action,
      children,
      className,
      onClick,
    } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      className
    );

    return (
      <div className={classes} onClick={onClick}>
        {img && (
          <figure className={`${baseClass}__cover`}>
            <img src={img} alt={title} className={`${baseClass}__image`} />
            {caption && (
              <figcaption className={`${baseClass}__caption`}>
                {caption}
              </figcaption>
            )}
          </figure>
        )}
        <div className={`${baseClass}__content`}>
          {header && <header className="gc-card__header">{header}</header>}
          {details && <div className="gc-card__details">{details}</div>}
          {action && <div className="gc-card__action">{action}</div>}
          {!header && !details && children}
        </div>
      </div>
    );
  }
}

export default Card;
