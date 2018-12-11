import * as React from 'react';

// import RewardCard from '@views/RewardCard';
// import { Competition } from 'src/types';

export interface Props {
    a:string
}

const baseClass = 'gc-all-products';

const AllProducts: React.SFC<Props> = ({ }) => (
    <div className={baseClass}>
        ajde brancilo kuco
        {/*<div className="gc-cards gc-competition-cards">ajde brancilo kuco*/}
        {/*</div>*/}
    </div>
);

export default AllProducts;