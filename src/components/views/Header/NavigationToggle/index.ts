import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import {
  showNavigationSidebar,
  hideNavigationSidebar,
} from 'src/state/actions';
import { isNavigationSidebarOpen } from 'src/state/selectors';
import { State } from 'src/state/state';

import NavigationToggle from './NavigationToggle';

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isNavigationSidebarOpen(state),
});

const actions = {
  showNavigationSidebar,
  hideNavigationSidebar,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleToggleSidebar: ({
      isSidebarOpen,
      hideNavigationSidebar,
      showNavigationSidebar,
    }) => () => {
      if (isSidebarOpen) {
        hideNavigationSidebar();
      } else {
        showNavigationSidebar();
      }
    },
  })
)(NavigationToggle);
