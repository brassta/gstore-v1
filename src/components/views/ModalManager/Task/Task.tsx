import * as React from 'react';

import { FormField } from '@components/Form';
import Button, { ButtonGroup } from '@components/Button';
import Modal from '@components/Modal';

export interface Props {
  taskCheckDisplayName: string;
  handleCheckButtonClick: () => void;
}

const baseClass = 'gc-task';

const Task: React.SFC<Props> = ({
  taskCheckDisplayName,
  handleCheckButtonClick,
}) => (
  <div className={baseClass}>
    <h5 className={`${baseClass}__title`}>Description</h5>
    <p className="gc-text">
      Take shorter showers. If you shower once a day, reducing your shower time
      by 4 minutes per day may save 3650 gallons annually. Typical shower head
      spits out an average of 2.5 gallons per minute. Replace it with low-flow
      shower for additional savings.
    </p>
    <h5 className={`${baseClass}__title`}>QUESTION</h5>
    <p className="gc-text">
      If you reduce shower time by 4 minutes, how much water can you save
      annually? Choose the correct answer to earn 50.
    </p>
    <div className={`${baseClass}__choices`}>
      <FormField
        type="radio"
        name="taskChoices"
        selected="two"
        multiple={[
          { value: 'one', label: '2.5 gallons' },
          { value: 'two', label: '3650 gallons' },
          { value: 'three', label: '10 minutes' },
        ]}
        inline={false}
      />
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <ButtonGroup type="separate" size="medium" align="center">
        <Button type="primary" onClick={handleCheckButtonClick}>
          {taskCheckDisplayName}
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </div>
);

export default Task;
