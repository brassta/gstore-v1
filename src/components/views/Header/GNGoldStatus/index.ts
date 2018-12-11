import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { fetchGoldBalance } from 'src/state/actions';
import { getGoldBalance } from 'src/state/selectors';
import { State } from 'src/state/state';

import GoldStatus from './GNGoldStatus';

const actions = {
    fetchGoldBalance,
};

const mapStateToProps = (state: State) => ({
    balance: getGoldBalance(state),
});

export default compose(
    connect(
        mapStateToProps,
        actions
    ),
    lifecycle<any, any>({
        componentDidMount() {
            const { fetchGoldBalance } = this.props;

            fetchGoldBalance();
        },
    })
)(GoldStatus);
