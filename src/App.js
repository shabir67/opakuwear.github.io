import React, { StrictMode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routers/AppRouter';
import Preloader from 'components/ui/Preloader';
import ReactGA from "react-ga";

//ReactGA.initialize(AppConfig.GOOGLE.GA_TRACKING_CODE);

const App = ({ store, persistor }) => {
	useEffect(()=>{
		//put yout React Ga code here!
		//ReactGA.initialize('UA-1xxxxx-x')
		//ReactGA.initialize(AppConfig.GOOGLE.GA_TRACKING_CODE);
		////ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Preloader />} persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>
	</StrictMode>
)};

export default App;
