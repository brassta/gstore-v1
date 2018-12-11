import * as React from 'react';

const baseClass = 'gc-uidemo';

const UIComponents: React.SFC = () => (
  <section
    className={`${baseClass}__section ${baseClass}__section--components`}>
    <header className={`${baseClass}__header`}>
      <h2 className={`${baseClass}__heading`}>UI Components</h2>
    </header>

    <div className="gc-layout gc-layout--hr">
      <div className="gc-layout--max">
        <h6 className={`${baseClass}__subtitle`}>HEADER</h6>
      </div>
    </div>
  </section>
);

export default UIComponents;
