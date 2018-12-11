import * as React from 'react';

import { HumanitarianProject } from 'src/types';

import Button from '@components/Button';
import Amount from '@components/Amount';
import ProgressiveImage from '@components/ProgressiveImage';

export interface InnerProps {
  isMobile: boolean;
  doGoodDonateDisplayName: string;
  doGoodDonatedDisplayName: string;
  doGoodGoalDisplayName: string;
  doGoodLearnMoreDisplayName: string;
  handleDonateClick: () => void;
}
export interface OuterProps {
  project: HumanitarianProject;
}

const baseClass = 'gc-humanitarian-project-card';

const ProjectCard: React.SFC<InnerProps & OuterProps> = ({
  isMobile,
  project: { title, name, coverImageUrl, text, donated, goal, learnMoreLink },
  doGoodDonateDisplayName,
  doGoodDonatedDisplayName,
  doGoodGoalDisplayName,
  doGoodLearnMoreDisplayName,
  handleDonateClick,
}) => (
  <div className={baseClass}>
    <header className={`${baseClass}__header`}>
      <h4 className={`${baseClass}__header__title`}>{name}</h4>
    </header>

    <section className={`${baseClass}__body`}>
      <div className={`${baseClass}__image-holder`}>
        <ProgressiveImage src={coverImageUrl} />
      </div>
      <div className={`${baseClass}__info`}>
        <h4 className={`${baseClass}__info__title`}>{title}</h4>
        <p className={`${baseClass}__info__description`}>
          {text} <a href={learnMoreLink}>{doGoodLearnMoreDisplayName}</a>
        </p>
        <footer className={`${baseClass}__footer`}>
          <div className={`${baseClass}__footer__stats`}>
            <div className={`${baseClass}__footer__amount`}>
              <span className={`${baseClass}__footer__amount__label`}>
                {doGoodDonatedDisplayName}
              </span>
              <Amount
                value={donated}
                currency={'gold'}
                size={isMobile ? 'huge' : undefined}
              />
            </div>
            <div className={`${baseClass}__footer__amount`}>
              <span className={`${baseClass}__footer__amount__label`}>
                {doGoodGoalDisplayName}
              </span>
              <Amount
                value={goal}
                currency={'gold'}
                showIcon={false}
                showCurrency={false}
                size={isMobile ? 'huge' : undefined}
              />
            </div>
          </div>
          <Button
            type="primary"
            size="medium"
            width={isMobile ? 'full' : undefined}
            onClick={handleDonateClick}>
            {doGoodDonateDisplayName}
          </Button>
        </footer>
      </div>
    </section>
  </div>
);

export default ProjectCard;
