import * as React from 'react';

import Modal from '@components/Modal';
import { hideModal } from 'src/state/actions';

import UploadCoverImage from './UploadCoverImage';
import UploadProfileImage from './UploadProfileImage';
import Reward from './Reward';
import Task from './Task';
import Ad from './Ad';
import EditProfile from './EditProfile';
import CompleteProfile from './CompleteProfile';
import Donate from './Donate';
import InsufficientFunds from './InsufficientFunds';
import GameFinished from './GameFinished';
import JoinCompetition from './JoinCompetition';
import Intro from './Intro';

import {
  ModalTypes,
  ModalSizes,
  ModalPosition,
  ModalAlignment,
} from '@components/Modal/Modal';

interface Props {
  modalName?: string;
  title?: string;
  hasClose?: boolean;
  header?: any;
  footer?: any;
  type?: ModalTypes;
  align?: ModalAlignment;
  position?: ModalPosition;
  size?: ModalSizes;
  data?: any;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  enforceFocus?: boolean;
  className?: string;
  onHideActions?: any[] | undefined;
  dispatch: (action: any) => void;
  headerAlign?: ModalAlignment;
  sticky?: boolean;
}

const modals = {
  UploadCoverImage,
  UploadProfileImage,
  Reward,
  Task,
  Ad,
  EditProfile,
  CompleteProfile,
  Donate,
  InsufficientFunds,
  GameFinished,
  JoinCompetition,
  Intro,
};

const ModalManager: React.SFC<Props> = props => {
  const {
    modalName,
    title,
    hasClose,
    header,
    footer,
    position,
    align,
    type,
    size,
    data,
    autoFocus,
    restoreFocus,
    enforceFocus,
    className,
    onHideActions,
    dispatch,
    headerAlign,
    sticky,
  } = props;

  const ModalContent = modals[modalName!];

  const handleOnHide = () => {
    if (onHideActions) {
      onHideActions.forEach(action => {
        dispatch(action);
      });
    }

    dispatch(hideModal());
  };

  return (
    <Modal
      title={title}
      hasClose={hasClose}
      header={header}
      footer={footer}
      show={!!modalName}
      onHide={handleOnHide}
      type={type}
      size={size}
      align={align}
      position={position}
      autoFocus={autoFocus}
      restoreFocus={restoreFocus}
      enforceFocus={enforceFocus}
      className={className}
      sticky={sticky}
      headerAlign={headerAlign}>
      {ModalContent && <ModalContent {...data} />}
    </Modal>
  );
};

ModalManager.defaultProps = {
  title: '',
  hasClose: true,
  header: null,
  footer: null,
  type: undefined,
  align: 'center',
  position: 'middle',
  size: 'medium',
  data: null,
  autoFocus: true,
  restoreFocus: true,
  enforceFocus: true,
  className: undefined,
  headerAlign: 'left',
};

export default ModalManager;
