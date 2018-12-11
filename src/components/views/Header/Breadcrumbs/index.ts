import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

import { getBreadcrumbsFromRoute } from 'src/constants/navigation';

import Breadcrumbs, { Breadcrumb } from './Breadcrumbs';

export default compose(
  withRouter,
  withProps(({ location }) => ({
    breadcrumbs: getBreadcrumbsFromRoute(location.pathname),
  })),
  withHandlers({
    handleNavigate: ({ history }) => (breadcrumb: Breadcrumb) =>
      history.push(breadcrumb.route),
  })
)(Breadcrumbs);
