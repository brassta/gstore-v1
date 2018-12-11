import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { competitionTimeFinish } from 'src/state/actions';
import { parseCompetitionTimeUntil } from 'src/utilities/mapper';

interface Props {
  dateUntil: string;
  onTimeExpired?: () => void;
  children: (state: State) => JSX.Element;
}

interface State {
  time: string;
}

const TimeTicker = class TimeTicker extends React.PureComponent<Props, State> {
  tickingInterval: NodeJS.Timer;
  state: State = {
    time: parseCompetitionTimeUntil(this.props.dateUntil),
  };

  componentDidMount() {
    this.tickingInterval = setInterval(() => {
      const { dateUntil, onTimeExpired } = this.props;
      const time = parseCompetitionTimeUntil(dateUntil);

      if (!time) {
        onTimeExpired && onTimeExpired();
        clearInterval(this.tickingInterval);
      } else {
        this.setState({
          time,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickingInterval);
  }

  render() {
    return this.props.children(this.state);
  }
};

interface CompetitionProps extends Props {
  id: string;
}

const actions = {
  competitionTimeFinish,
};

export const CompetitionTimeTicker = compose<Props, CompetitionProps>(
  connect(
    null,
    actions
  ),
  withHandlers({
    onTimeExpired: ({ competitionTimeFinish, id }) => () => {
      competitionTimeFinish(id);
    },
  })
)(TimeTicker);

export default TimeTicker;
