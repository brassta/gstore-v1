import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { getRewards } from 'src/state/selectors';
import { fetchProducts } from 'src/state/actions';

import AllProducts, { Props } from './AllProducts';

const actions = {
    fetchProducts,
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
            const { fetchProducts } = this.props;

            fetchProducts();
        },
    })
)(AllProducts);
