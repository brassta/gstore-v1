import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { State } from 'src/state/state';
import { hideModal } from 'src/state/actions';

import { LocalStorage, SEEN_WALKTHROUGH } from 'src/services/localStorage';

import Intro, { Props } from './Intro';

const actions = {
  hideModal,
};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleSkipClick: ({ hideModal }) => () => {
      LocalStorage.set(SEEN_WALKTHROUGH, true);
      hideModal();
    },
    handleFinish: ({ hideModal }) => () => {
      LocalStorage.set(SEEN_WALKTHROUGH, true);
      hideModal();
    },
  })
)(Intro);
