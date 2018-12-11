import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import Step1, { Props } from './Step1';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    step1HeadingDisplayName: formatMessage(messages.step1Heading),
    step1Text: messages.step1Text,
  }))
)(Step1);
