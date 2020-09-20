import React, { Suspense } from 'react';
import './App.css';
import Topbar from './components/Topbar'
import Header from './components/Header'
import Footer from './components/Footer'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import routes from './config/routes'

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div> Loading..... </div>}>
				<Router>
					<Topbar />
					<Header />
					<Switch>
						{showContentMenu(routes)}
					</Switch>
					<Footer />
				</Router>
			</Suspense>
		</div>
	);
}

const showContentMenu = (routes) => {
	let result;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return <Route
				key={index}
				path={route.path}
				component={route.component}
				exact={route.exact}
			/>
		})
	}
	return result;
}

export default App;
