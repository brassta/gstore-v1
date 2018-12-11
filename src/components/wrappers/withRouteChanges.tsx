import * as React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

interface Props {
  history: any;
}

interface State {
  location: Location;
}

// This wrapper is to be used when component needs to react to route changes.
// If you use withRouter from react-router-dom only, that will do the trick, only if
// the changed location prop is passed from a parent component. With this we get
// the flexibility of both cases.
const withRouteChanges = (WrappedComponent: any) =>
  class WithRouteChanges extends React.PureComponent<Props, State> {
    unlisten: any;

    componentDidMount() {
      const { history } = this.props;

      this.unlisten = history.listen((location: any) => {
        this.setState({
          location,
        });
      });
    }

    componentWillUnmount() {
      this.unlisten();
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default (WrappedComponent: any) =>
  compose(
    withRouter,
    withRouteChanges
  )(WrappedComponent);
