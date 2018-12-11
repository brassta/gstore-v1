import * as React from 'react';
import classnames from 'classnames';

import { Task } from 'src/types';
import { TaskType } from 'src/constants';

import Icon from '@components/Icon';
import IconCalendar from '@images/icon-calendar-multiple.svg';
import IconCalendarChecked from '@images/icon-calendar-multiple-check.svg';
import IconClipboard from '@images/icon-clipboard.svg';
import IconClipboardChecked from '@images/icon-clipboard-check.svg';

export interface InnerProps {
  task: Task;
  handleCardClick: () => void;
}

export interface OuterProps {
  task: Task;
}

const baseClass = 'gc-dashboard-task';

const DashboardCardIcon: React.SFC<{
  completed: boolean;
  taskType: TaskType;
}> = ({ completed, taskType }) => {
  let Svg: any = null;

  if (taskType === TaskType.DAILY_CHECK_IN) {
    Svg = completed ? IconCalendarChecked : IconCalendar;
  }

  Svg = completed ? IconClipboardChecked : IconClipboard;

  return (
    <Icon
      data={Svg}
      size="large"
      spacing="right"
      className={`${baseClass}__icon`}
    />
  );
};

const DashboardCard: React.SFC<InnerProps & OuterProps> = ({
  task: { title, completed, type },
  handleCardClick,
}) => {
  const classes = classnames(baseClass, !completed && `${baseClass}--active`);

  return (
    <div className={classes} onClick={handleCardClick}>
      <DashboardCardIcon completed={completed} taskType={type} />
      {title}
    </div>
  );
};

export default DashboardCard;
