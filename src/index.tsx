import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import '@styles/themes/gn-org/index.scss';
// import '@styles/themes/gn-org/gnation2.css';
// import '@styles/themes/gn-org/gnation.css';
import '@styles/gstore-custom/index.scss'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
