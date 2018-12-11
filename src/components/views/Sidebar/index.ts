import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { isNavigationSidebarOpen } from 'src/state/selectors';
import { hideNavigationSidebar } from 'src/state/actions';
import { State } from 'src/state/state';
import withConfigSizes from '@wrappers/withConfigSizes';

import Sidebar from './Sidebar';

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isNavigationSidebarOpen(state),
});

const actions = {
  hideSidebar: hideNavigationSidebar,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleHide: ({ hideSidebar }) => () => hideSidebar(),
  }),
  withConfigSizes
)(Sidebar);
