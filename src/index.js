import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';

const store = configureStore();

render(
	<ReduxProvider store={store}>
		<Router>
			<App />
		</Router>
	</ReduxProvider>,
	document.getElementById('app')
);
