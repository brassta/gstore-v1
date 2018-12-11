import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { getPastCompetitions } from 'src/state/selectors';
import { fetchPastCompetitions } from 'src/state/actions';

import MyCompetitions, { Props } from './MyCompetitions';

const actions = {
  fetchPastCompetitions,
};

const mapStateToProps = (state: State) => ({
  competitions: getPastCompetitions(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchPastCompetitions } = this.props;

      fetchPastCompetitions();
    },
  })
)(MyCompetitions);
