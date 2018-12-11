import * as React from 'react';

import Button from '@components/Button';

export interface Props {
  isRefreshInProgress: boolean;
  refreshListText: string;
  handleRefresh: React.MouseEventHandler;
}

const baseClass = 'gc-competition-refresh';

const RefreshSnippet: React.SFC<Props> = ({
  isRefreshInProgress,
  refreshListText,
  handleRefresh,
}) => (
  <div className={baseClass}>
    <Button onClick={handleRefresh} busy={isRefreshInProgress}>
      {refreshListText}
    </Button>
  </div>
);

export default RefreshSnippet;
