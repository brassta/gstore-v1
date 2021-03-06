import * as React from 'react';
import classNames from 'classnames';

import Odometer from '@components/Odometer';
import Icon from '@components/Icon';
import Loader from '@components/Loader';
import GNCoinIcon from '@images/gn-coin.svg';

const baseClass = 'gc-gold-balance';

export interface Props {
  className?: string;
  balance: number;
}

class Balance extends React.PureComponent<Props> {
  render() {
    const { className, balance } = this.props;
    const classes = classNames(baseClass, className);

    return (
      <div className={classes}>
        <Icon data={GNCoinIcon} size="normal" spacing="right" />
        {!balance && balance !== 0 ? (
          <Loader textual />
        ) : (
          <Odometer
            value={balance}
            format="(,ddd)"
            className={`${baseClass}__amount`}
          />
        )}
      </div>
    );
  }
}

export default Balance;
