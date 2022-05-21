import React from 'react';
import {Link} from 'react-router';

const HomePage = ()=> {
	return ( 
		<div className="jumbotron">
			<h1 style={{color:'darkgreen'}}>Welcome to Restaurant</h1>
			<p className="lead" style={{fontSize:'36px',marginTop:"42px",marginBottom:'32px'}}>Drink , Food Enjoy with Your Family</p>
			<p>
				<Link className="btn btn-lg btn-success" to="booking">
					Book Now!
				</Link>
			</p>
		</div>
	);
};

export default HomePage;
