import { compose } from 'recompose';
import { connect } from 'react-redux';

import { translations } from 'src/intl';
// import { getLocale } from 'src/state/selectors';
import { State } from 'src/state/state';

import IntlProvider from './IntlProvider';

const mapStateToProps = (state: State) => ({
  locale: 'en',
  // tslint:disable-next-line
  messages: translations['en'],
});

export default compose(
  connect(
    mapStateToProps,
    null
  )
)(IntlProvider);
