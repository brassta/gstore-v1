import * as React from 'react';

const baseClass = 'gc-breadcrumbs';

export interface Breadcrumb {
  route: string;
  displayName: string;
}

export interface Props {
  breadcrumbs: Breadcrumb[];
  handleNavigate: (breadcrumb: Breadcrumb) => void;
}

const Breadcrumbs: React.SFC<Props> = ({ breadcrumbs, handleNavigate }) => (
  <div className={baseClass}>
    {breadcrumbs.map(breadcrumb => (
      <div
        key={breadcrumb.route}
        className="gc-breadcrumb"
        onClick={handleNavigate.bind(null, breadcrumb)}>
        {breadcrumb.displayName}
      </div>
    ))}
  </div>
);

export default Breadcrumbs;
