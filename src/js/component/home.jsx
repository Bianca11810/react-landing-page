import React from "react";

import Welcome from "./welcome";
import Nav from './nav';
import Card from './card';
import Footer from './footer';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav/>
			<Welcome/> 
			<div className="row">
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
				<div className="col-3">
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
