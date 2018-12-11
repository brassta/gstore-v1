import * as React from 'react';

import Feed from './Feed';

const baseClass = 'gc-dashboard';

const Dashboard: React.SFC = () => (
  <div className={baseClass}>
    <Feed />
  </div>
);

export default Dashboard;
