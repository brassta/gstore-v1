import * as React from 'react';
import {Product} from "src/types";

// import RewardCard from '@views/RewardCard';
// import { Competition } from 'src/types';

export interface Props {
    allProducts:Product[];
};

const baseClass = 'gc-all-products';

const AllProducts: React.SFC<Props> = ({}) => {
    return (
        <div className={baseClass}>
            ajde brancilo kuco
        </div>
    )
};

export default AllProducts;