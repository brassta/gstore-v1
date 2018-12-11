import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { visibleCardPlaceholderCount } from 'src/constants';
import { State } from 'src/state/state';
import {
  getCurrentNonFeaturedCompetitions,
  isCurrentCompetitionsInProgress,
} from 'src/state/selectors';
import { fetchCurrentCompetitions } from 'src/state/actions';

import CurrentCompetitions, { Props } from './CurrentCompetitions';

const actions = {
  fetchCurrentCompetitions,
};

const mapStateToProps = (state: State) => ({
  competitions: getCurrentNonFeaturedCompetitions(state),
  isLoading: isCurrentCompetitionsInProgress(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchCurrentCompetitions } = this.props;

      fetchCurrentCompetitions();
    },
  }),
  withProps(({ competitions }) => ({
    placeholderCount: visibleCardPlaceholderCount,
  }))
)(CurrentCompetitions);
