import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form';

import { COMPETITION_DETAILS_PAGE } from 'src/constants';
import Modal from '@components/Modal/Modal';
import Button from '@components/Button/Button';
import Amount, { AmountCurrency } from '@components/Amount/Amount';
import Form, { FormField } from '@components/Form';
import Trophy from '@images/trophy2.svg';

export interface Props {
  headerDisplayName: string;
  gameFinishedWinnerMessage: FormattedMessage.MessageDescriptor;
  gameFinishedRank: FormattedMessage.MessageDescriptor;
  gameFinishedLoserMessageDisplayName: string;
  gameFinishedMgoAddressMessage: string;
  yourAddressMessage: string;
  buttonDisplayName: string;
  claimReward: (props: any) => void;
  hideModal: () => void;
  clearClaimRewardState: () => void;
  rank: number;
  amount: number;
  hasPrize: boolean;
  currency: AmountCurrency;
  inProgress: boolean;
  isError: boolean;
  valid: boolean;
  pristine: boolean;
  competitionId: number;
  claimId: number;
  history: any;
}

const baseClass = 'gc-game-finished';
const baseClassContent = `${baseClass}__content`;

class GameFinished extends React.Component<Props> {
  mgoAddress: string = '';

  constructor(props: Props) {
    super(props);
  }

  handleClaimClick = () => {
    const {
      competitionId,
      claimId,
      hasPrize,
      claimReward,
      hideModal,
      history,
      clearClaimRewardState,
    } = this.props;

    if (hasPrize) {
      claimReward({ competitionId, claimId, mgoAddress: this.mgoAddress });
    } else {
      hideModal();
      history.push(`${COMPETITION_DETAILS_PAGE}/${competitionId}`);
    }
    clearClaimRewardState();
  };

  handleMGOAddressChange = (value: any) => {
    const { valid } = this.props;

    // don't set address if form is invalid
    if (!valid) {
      return;
    }

    // TODO@martins fix passing of values
    const valueArray = Object.values(value);
    // remove preventDefault
    valueArray.pop();

    this.mgoAddress = valueArray.join('');
  };

  render() {
    const {
      rank,
      amount,
      hasPrize,
      currency,
      headerDisplayName,
      gameFinishedWinnerMessage,
      gameFinishedLoserMessageDisplayName,
      gameFinishedRank,
      gameFinishedMgoAddressMessage,
      yourAddressMessage,
      buttonDisplayName,
      inProgress,
    } = this.props;

    return (
      <div className={baseClass}>
        <div className={baseClassContent}>
          <figure
            className={`${baseClassContent}__goblet ${
              hasPrize ? `${baseClassContent}__goblet--trophy` : ''
            }`}>
            {hasPrize && <Trophy />}
            {!hasPrize && (
              <figcaption className={`${baseClassContent}__goblet__rank`}>
                {rank}
              </figcaption>
            )}
          </figure>

          <h2 className={`${baseClassContent}__header`}>{headerDisplayName}</h2>
          <div className={`${baseClassContent}__message`}>
            {hasPrize ? (
              <FormattedMessage
                {...gameFinishedWinnerMessage}
                values={{
                  prize: (
                    <Amount
                      className={`${baseClassContent}__amount`}
                      value={amount}
                      align="right"
                      currency={currency}
                    />
                  ),
                }}
              />
            ) : (
              gameFinishedLoserMessageDisplayName
            )}
            &nbsp;
            {rank && (
              <FormattedMessage
                {...gameFinishedRank}
                values={{
                  rank: (
                    <span className={`${baseClassContent}__rank`}>{rank}</span>
                  ),
                }}
              />
            )}
          </div>

          {(currency === 'mgo' || currency === 'mobilego') && (
            <div className={`${baseClassContent}__message`}>
              <hr />
              {gameFinishedMgoAddressMessage}
              <br />
              <br />
              <Form>
                <Field
                  // TODO@martins fix types
                  // @ts-ignore
                  component={FormField}
                  width="full"
                  type="text"
                  name="mgoAddress"
                  placeholder={yourAddressMessage}
                  onChange={this.handleMGOAddressChange}
                  // TODO@martins add validators
                />
              </Form>
            </div>
          )}
        </div>
        <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
          <Button
            type="primary"
            busy={inProgress}
            onClick={this.handleClaimClick}>
            {buttonDisplayName}
          </Button>
        </Modal.Footer>
      </div>
    );
  }
}

export default GameFinished;
