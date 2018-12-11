import { compose } from 'recompose';
import withConfigSizes from '@wrappers/withConfigSizes';

import HeaderToolbarToogle from './HeaderToolbarToogle';

export default compose(withConfigSizes)(HeaderToolbarToogle);