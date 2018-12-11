import * as React from 'react';
import { IntlProvider } from 'react-intl';

interface Props {
  locale: string;
  messages: any;
}

const Provider: React.SFC<Props> = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} messages={messages}>
    {children}
  </IntlProvider>
);

export default Provider;
