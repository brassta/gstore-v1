import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { injectIntl } from 'react-intl';

import { State } from 'src/state/state';
import { fetchHumanitarianProjects } from 'src/state/actions';
import {
  getHumanitarianProjects,
  isFetchProjectsInProgress,
} from 'src/state/selectors';

import DoGood, { Props } from './DoGood';

const actions = {
  fetchHumanitarianProjects,
};

const mapStateToProps = (state: State) => ({
  projects: getHumanitarianProjects(state),
  isFetchProjectsInProgress: isFetchProjectsInProgress(state),
});

export default compose<Props, {}>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  lifecycle<any, any>({
    componentDidMount() {
      const { fetchHumanitarianProjects } = this.props;

      fetchHumanitarianProjects();
    },
  })
)(DoGood);
