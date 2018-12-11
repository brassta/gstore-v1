import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { getParticipants, isParticipantsInProgress } from 'src/state/selectors';
import { State } from 'src/state/state';
import { fetchParticipants } from 'src/state/actions';

import CompetitionParticipants, { Props } from './CompetitionParticipants';

const actions = {
  fetchParticipants,
};

const mapStateToProps = (state: State) => ({
  participants: getParticipants(state),
  inProgress: isParticipantsInProgress(state),
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<Props & typeof actions, {}>({
    componentDidMount() {
      const { id, fetchParticipants } = this.props;

      fetchParticipants({ competitionId: id });
    },
  }),
  withHandlers({
    handleRefresh: ({ fetchParticipants, id }) => (e: any) => {
      fetchParticipants({ competitionId: id });
    },
  })
)(CompetitionParticipants);
