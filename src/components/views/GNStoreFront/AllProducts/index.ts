import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import {injectIntl} from 'react-intl';

import {State} from 'src/state/state';
// import {getAllProducts} from 'src/state/selectors';
import {fetchProducts} from 'src/state/actions';

import AllProducts, {Props} from './AllProducts';

const actions = {
    fetchProducts,
};

const mapStateToProps = (state: State) => ({
    allProducts: fetchProducts,
});

export default compose<Props, {}>(
    injectIntl,
    connect(
        mapStateToProps,
        actions
    ),
    lifecycle<any, any>({
        componentDidMount() {

            // console.log('ene');

            // const fetchProducts = this.props.allProducts;

            // const products = fetchProducts();
            // eslint-disable-next-line
            // console.log('evo nas', products);
        },
    })
)(AllProducts);
