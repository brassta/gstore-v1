import * as React from 'react';

import Icon from '@components/Icon';
import SvgSuccess from '@images/success.svg';
import SvgFailure from '@images/failure.svg';

interface Props {
  title: string;
  isSuccess?: boolean;
  children: any;
}

const baseClass = 'gc-message';

const Message: React.SFC<Props> = props => {
  const { title, isSuccess, children } = props;
  return (
    <div className={`${baseClass}`}>
      <Icon size="thumbnail" data={isSuccess ? SvgSuccess : SvgFailure} />
      <h3 className="gc-heading">{title}</h3>
      <div className={`${baseClass}__content`}>{children}</div>
    </div>
  );
};

export default Message;
