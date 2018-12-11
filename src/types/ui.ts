export interface ModalMetadata {
  modalName: string;
  type?: string;
  title?: string;
  hasClose?: boolean;
  header?: any;
  footer?: any;
  position?: string;
  align?: string;
  size?: string;
  data?: any;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  enforceFocus?: boolean;
  onHideActions?: any;
  className?: string;
  footerAlign?: string;
  sticky?: boolean;
}
