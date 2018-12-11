import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { compose, withProps } from 'recompose';
import classNames from 'classnames';

import { IntlProvider } from 'src/components/providers';
import { ActionObject } from 'src/utilities/redux';
import { State } from 'src/state/state';
import { ActionMap, ActionTypes } from 'src/state/actions';

import withConfigSizes from '@wrappers/withConfigSizes';

import configureStore from './state/configureStore';
import Routes from './components/views';

import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
// import { YMInitializer } from 'react-yandex-metrika';
// import ym from 'react-yandex-metrika';
//
const isProd = process.env.NODE_ENV === 'production';

interface Props {
	store: Store<State, ActionObject<ActionMap, ActionTypes>>;
	history: History;
	isDesktop: boolean;
	isTablet: boolean;
	isMobile: boolean;
}

const { history, store } = configureStore();

const baseClass = 'gc-app';

const App: React.SFC<Props> = ({ store, history, isDesktop, isTablet, isMobile }) => {
	const classes = classNames(
		baseClass,
		isDesktop && `${baseClass}--desktop`,
		isTablet && `${baseClass}--tablet`,
		isMobile && `${baseClass}--mobile`
	);

	return (
		<Provider store={store}>
			<IntlProvider>
				<ConnectedRouter history={history}>
					<div className={classes}>
						<Routes />
						{
							// TODO @misha enable it when App crash is solved ESP-736
							/*{isProd && <YMInitializer accounts={[50887028]} />}*/
						}
					</div>
				</ConnectedRouter>
			</IntlProvider>
		</Provider>
	);
};

if (isProd) {
	/*** BEGIN ANALYTICS BLOCK ***/

	ReactGA.initialize('UA-109671261-7');
	ReactGA.pageview(location.pathname + location.search);
	history.listen((location) => {
		ReactGA.pageview(location.pathname);

		// TODO @misha enable it when App crash is solved ESP-736
		// ym('hit', location.pathname);
	});

	hotjar.initialize(1069976, 6);
	/*** END ANALYTICS BLOCK ***/
}

export default compose(withProps(() => ({ history, store })), withConfigSizes)(App);
