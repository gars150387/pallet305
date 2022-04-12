import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

// import { Header } from "./component/Header";
import { NavbarWebsite } from "./component/Navbar";
import { Footer } from "./component/footer";
import { About } from "./views/About";
import { Design } from "./views/Design";
import { Contact } from "./views/Contact";
import { Policy } from "./views/Policy";
import { Payment } from "./views/Payment";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<NavbarWebsite />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/design">
							<Design />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						{/* <Route exact path="/policy">
							<Policy />
						</Route>
						<Route exact path="/payment">
							<Payment />
						</Route> */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
