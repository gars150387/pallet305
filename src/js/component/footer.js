import React from "react";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="left">
			<Link to="./about">
				<h5 >About</h5>
			</Link>
			<Link to="./design">
				<h5>Design</h5>
			</Link>
			<Link to="./contact">
				<h5>Contact</h5>
			</Link>
			<div className="right">
				<Link to="./policy">
					<h5>Policy</h5>
				</Link>
				<Link to="./payment">
					<h5>Payment</h5>
				</Link>
			</div>


		</div>
	</footer>
);
