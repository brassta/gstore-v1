import * as React from 'react';
import classNames from 'classnames';

import Icon from '@components/Icon';
import Output from '@components/Output';
import Odometer from '@components/Odometer';
import IconGold from '@images/icon-gold.svg';
import IconGame from '@images/icon-game.svg';
import IconMgo from '@images/icon-mgo.svg';

export type AmountSize = 'small' | 'normal' | 'large' | 'huge';

export type AmountAlign = 'left' | 'right';

export type AmountCurrency =
  | 'game'
  | 'gold'
  | 'gnationgold'
  | 'mgo'
  | 'mobilego';

const currencyIcons = {
  game: IconGame,
  gnationgold: IconGame,
  gold: IconGold,
  mgo: IconMgo,
  mobilego: IconMgo,
};

const baseClass = 'gc-amount';

interface Props {
  value: number;
  precision?: number;
  currency: AmountCurrency;
  odometer?: boolean;
  showIcon?: boolean;
  showCurrency?: boolean;
  upperCase?: boolean;
  align?: AmountAlign;
  size?: AmountSize;
  className?: string;
}

const getIcon = (currency: string, size: AmountSize = 'normal'): any => {
  const iconSizes: any = {
    huge: 'large',
    large: 'small',
    normal: 'small',
    small: 'tiny',
  };

  return (
    <Icon
      data={currencyIcons[currency]}
      size={iconSizes[size]}
      color="unset"
      className={`${baseClass}__icon`}
    />
  );
};

const Amount: React.SFC<Props> = props => {
  const {
    value,
    precision = 0,
    odometer = false,
    showIcon = true,
    showCurrency = true,
    upperCase = false,
    size,
    align = 'left',
    className,
  } = props;

  const currency = props.currency === 'gnationgold' ? 'gold' : props.currency;
  const currencyLabel = upperCase ? currency.toUpperCase() : currency;

  const classes = classNames(
    baseClass,
    size && `${baseClass}--${size}`,
    align && `${baseClass}--${align}`,
    className,
    currency === 'gold' && `${baseClass}--golden`
  );

  return (
    <span className={classes}>
      {showIcon && getIcon(currency, size)}
      {!showIcon &&
        showCurrency && (
          <span className={`${baseClass}__sign`}>{currencyLabel}</span>
        )}
      {odometer ? (
        <Odometer
          value={value}
          format="( ddd)"
          className={`${baseClass}__value`}
        />
      ) : (
        <Output
          value={('' + value).replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            $1 => $1 + ' '
          )}
          precision={precision}
          className={`${baseClass}__value`}
        />
      )}
    </span>
  );
};

export default Amount;
