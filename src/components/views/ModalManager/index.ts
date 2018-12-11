import { connect } from 'react-redux';

import { getModalMetadata } from 'src/state/selectors';
import { State } from 'src/state/state';

import ModalManager from './ModalManager';

const mapStateToProps = (state: State) => ({
  ...getModalMetadata(state),
});

const actions = (dispatch: any) => ({ dispatch });

export default connect(
  mapStateToProps,
  actions
)(ModalManager);
