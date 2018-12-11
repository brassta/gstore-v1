import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { showModal } from 'src/state/actions';
import { Modals, TaskType } from 'src/constants';

import messages from './messages';
import DashboardTaskCard, { InnerProps, OuterProps } from './DashboardTaskCard';

const actions = {
  showModal,
};

const mapStateToProps = (state: State) => ({});

export default compose<InnerProps, OuterProps>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    newTaskDisplayName: formatMessage(messages.newTask),
    congratulationsDisplayName: formatMessage(messages.congratulations),
    dashboardWatchVideoAdDisplayName: formatMessage(
      messages.dashboardWatchVideoAd
    ),
  })),
  withHandlers({
    handleCardClick: ({
      task,
      showModal,
      congratulationsDisplayName,
    }) => () => {
      const modalConfig =
        task.type === TaskType.TASK
          ? {
              modalName: Modals.Task,
              title: 'Take shorter showers', // TODO@martins remove mocked text
            }
          : {
              modalName: Modals.Reward,
              title: congratulationsDisplayName,
              size: 'small',
            };

      showModal(modalConfig);
    },
  })
)(DashboardTaskCard);
