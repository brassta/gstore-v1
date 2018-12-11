import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import DashboardCard, { Props } from './DashboardCard';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<{}, Props>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    dashboardCardMessageDisplayName: formatMessage(
      messages.dashboardCardMessage
    ),
  }))
)(DashboardCard);
