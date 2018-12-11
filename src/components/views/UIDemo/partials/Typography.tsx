import * as React from 'react';

import Anchor from '@components/Anchor';

const baseClass = 'gc-uidemo';

const Typography: React.SFC = () => (
  <section
    className={`${baseClass}__section ${baseClass}__section--typography`}>
    <header className={`${baseClass}__header`}>
      <h1 className={`${baseClass}__heading`}>Typography</h1>
    </header>

    <div className="gc-layout gc-layout--hr">
      <div className="gc-layout--half">
        <h6 className={`${baseClass}__subtitle`}>HEADINGS</h6>

        <h1 className="gc-heading">H1 - Roboto regular 36px</h1>
        <h2 className="gc-heading">H2 - Roboto regular 24px</h2>
        <h3 className="gc-heading">H3 - Roboto regular 20px</h3>
        <h4 className="gc-heading">H4 - Roboto regular 18px</h4>
        <h5 className="gc-heading">H5 - Roboto regular 14px</h5>
        <h6 className="gc-heading">H6 - Roboto regular 10px</h6>

        <br />

        <h6 className={`${baseClass}__subtitle`}>Hyperlink</h6>
        <div className="gc-layout gc-layout--hr">
          <div className="gc-layout--third">
            <Anchor href="">Normal</Anchor>
          </div>
          <div className="gc-layout--third">
            <Anchor href="" className="gc-link--hover">
              Hover
            </Anchor>
          </div>
          <div className="gc-layout--third">
            <Anchor href="" disabled>
              Disabled
            </Anchor>
          </div>
        </div>
      </div>

      <div className="gc-layout--half">
        <h6 className={`${baseClass}__subtitle`}>TEXT</h6>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
          pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
          molestie, et aliquam erat laoreet.
        </p>

        <h6 className={`${baseClass}__subtitle`}>SECONDARY TEXT</h6>

        <p className="gc-text--secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
          pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
          molestie, et aliquam erat laoreet.
        </p>

        <h6 className={`${baseClass}__subtitle`}>ALT TEXT</h6>

        <p className="gc-text--alt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
          pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam
          molestie, et aliquam erat laoreet.
        </p>
      </div>
    </div>
  </section>
);

export default Typography;
