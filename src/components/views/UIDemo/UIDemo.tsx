import * as React from 'react';

import Logo from '@components/Logo';
import Typography from './partials/Typography';
import BaseInputs from './partials/BaseInputs';
import Notifications from './partials/Notifications';
import Miscellaneous from './partials/Miscellaneous';
// import UIComponents from './partials/UIComponents';
import DataTable from './partials/DataTable';

const baseClass = 'gc-uidemo';

const UIDemo: React.SFC = () => (
  <div className={baseClass}>
    <div className={`${baseClass}__layout`}>
      <header className={`${baseClass}__header`}>
        <Logo size="large" />
        <h5>Style Guide</h5>
      </header>

      <Typography />

      <BaseInputs />

      <Notifications />

      <DataTable />

      <Miscellaneous />
      {/* <UIComponents /> */}
    </div>
  </div>
);

export default UIDemo;
