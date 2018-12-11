import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Step2, { Props } from './Step2';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    step2HeadingDisplayName: formatMessage(messages.step2Heading),
    step2Text: messages.step2Text,
  }))
)(Step2);
