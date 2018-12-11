import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Step3, { Props } from './Step3';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    step3HeadingDisplayName: formatMessage(messages.step3Heading),
    step3Text: messages.step3Text,
  }))
)(Step3);
