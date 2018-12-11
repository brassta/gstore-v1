import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Reward, { Props } from './Reward';

const actions = {};

const mapStateToProps = (state: State) => ({
  goldEarned: 50,
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    yourRewardDisplayName: formatMessage(messages.yourReward),
  }))
)(Reward);
