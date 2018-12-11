import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { isFetchFeedInProgress, getFeedItems } from 'src/state/selectors';
import { fetchFeed } from 'src/state/actions';

import Feed, { Props } from './Feed';
import messages from './messages';

const actions = {
  fetchFeed,
};

const mapStateToProps = (state: State) => ({
  feedItems: getFeedItems(state),
  isFetchFeedInProgress: isFetchFeedInProgress(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    feedTitleDisplayName: formatMessage(messages.feedTitle),
    todayDisplayName: formatMessage(messages.today),
  })),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchFeed } = this.props;

      fetchFeed();
    },
  })
)(Feed);
