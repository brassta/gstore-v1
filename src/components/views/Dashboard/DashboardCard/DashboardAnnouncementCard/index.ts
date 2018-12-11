import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import DashboardAnnouncementCard, { Props } from './DashboardAnnouncementCard';
import messages from './messages';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, any>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    announcementDisplayName: formatMessage(messages.announcement),
  }))
)(DashboardAnnouncementCard);
