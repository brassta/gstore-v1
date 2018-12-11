import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';

import messages from './messages';
import CompetitionRules, { InnerProps, OuterProps } from './CompetitionRules';

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<InnerProps, OuterProps>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withProps(({ intl: { formatMessage } }) => ({
    noRulesDisplayName: formatMessage(messages.competitionRulesNoRules),
    titleDisplayName: formatMessage(messages.competitionRulesTitle),
  }))
)(CompetitionRules);
