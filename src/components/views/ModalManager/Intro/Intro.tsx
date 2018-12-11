import * as React from 'react';

import Stepper, { StepperStep } from '@components/Stepper';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export interface Props {
  handleSkipClick: () => void;
  handleFinish: () => void;
}

const steps: StepperStep[] = [
  {
    name: 'Step 1',
    buttons: {
      align: 'justify',
      size: 'large',
      next: 'Next',
      skip: 'Skip',
    },
    component: <Step1 />,
  },
  {
    name: 'Step 2',
    buttons: {
      align: 'justify',
      size: 'large',
      next: 'Next',
      skip: 'Skip',
    },
    component: <Step2 />,
  },
  {
    name: 'Step 3',
    buttons: {
      align: 'center',
      size: 'large',
      next: 'Get Started',
    },
    component: <Step3 />,
  },
];

const baseClass = 'gc-intro';

const Intro: React.SFC<Props> = ({ handleSkipClick, handleFinish }) => (
  <div className={baseClass}>
    <Stepper
      type="compact"
      steps={steps}
      showButtons
      clickableSteps
      showProgress
      showSteps={false}
      className={baseClass}
      onSkipClick={handleSkipClick}
      onFinish={handleFinish}
    />
  </div>
);

export default Intro;
