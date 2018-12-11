import * as React from 'react';

export interface InnerProps {
  noRulesDisplayName: string;
  titleDisplayName: string;
}

export interface OuterProps {
  rules: string;
}

const baseClass = 'gc-competition-rules';

const CompetitionRules: React.SFC<InnerProps & OuterProps> = ({
  rules,
  noRulesDisplayName,
  titleDisplayName,
}) => (
  <div className={baseClass}>
    <div className={`${baseClass}__content`}>
      <h2 className={`${baseClass}__content__title`}>{titleDisplayName}</h2>
      {!rules && noRulesDisplayName}
      {rules}
    </div>
  </div>
);

export default CompetitionRules;
