import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';

import withConfigSizes from '@wrappers/withConfigSizes';
import { State } from 'src/state/state';
import { showModal, clearDonateState } from 'src/state/actions';
import { getGoldBalance } from 'src/state/selectors';
import { Modals, MINIMUM_DONATION } from 'src/constants';

import messages from './messages';
import ProjectCard, { InnerProps, OuterProps } from './ProjectCard';

const actions = {
  showModal,
  clearDonateState,
};

const mapStateToProps = (state: State) => ({
  goldBalance: getGoldBalance(state),
});

export default compose<InnerProps, OuterProps>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleDonateClick: ({
      showModal,
      clearDonateState,
      goldBalance,
      project: { name, projectId },
    }) => () => {
      if (goldBalance > MINIMUM_DONATION) {
        showModal({
          modalName: Modals.Donate,
          data: { projectName: name, projectId },
          onHideActions: [clearDonateState()],
        });
      } else {
        showModal({
          modalName: Modals.InsufficientFunds,
          data: { isForDonation: true },
        });
      }
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    doGoodDonateDisplayName: formatMessage(messages.doGoodDonate),
    doGoodDonatedDisplayName: formatMessage(messages.doGoodDonated),
    doGoodGoalDisplayName: formatMessage(messages.doGoodGoal),
    doGoodLearnMoreDisplayName: formatMessage(messages.doGoodLearnMore),
  })),
  withConfigSizes
)(ProjectCard);
