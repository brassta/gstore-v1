import { compose } from 'recompose';
import withConfigSizes from '@wrappers/withConfigSizes';

import BellNotifier from './BellNotifier';

export default compose(withConfigSizes)(BellNotifier);