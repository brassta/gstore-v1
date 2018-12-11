import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { getRewards } from 'src/state/selectors';
import { fetchRewards } from 'src/state/actions';

import Rewards, { Props } from './Rewards';

const actions = {
  fetchRewards,
};

const mapStateToProps = (state: State) => ({
  competitions: getRewards(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchRewards } = this.props;

      fetchRewards();
    },
  })
)(Rewards);
