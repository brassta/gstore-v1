import { compose } from 'recompose';
import withConfigSizes from '@wrappers/withConfigSizes';

import Header from './Header';

export default compose(withConfigSizes)(Header);
