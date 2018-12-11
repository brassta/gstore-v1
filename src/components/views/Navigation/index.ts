import { compose } from 'recompose';
import { withRouteChanges } from 'src/components/wrappers';

import Navigation from './Navigation';

export default compose(withRouteChanges)(Navigation);
