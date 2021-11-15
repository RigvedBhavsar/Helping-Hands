import React from 'react'

const Footer = () => {
	return (
		<footer class="page-footer footer">
			<div class="container footer-main">
				<div class="row">
					<div class="col l3 s12">
						<h6 class="white-text">HELPING HANDS</h6>
						<ul>
							<li><a class=" text-lighten-4 footer-links" href="#about">About</a></li>
							<li><a class=" text-lighten-4 footer-links" href="#contact">Contact</a></li>
						</ul>
					</div>
					<div class="col l3 s12">
						<h6 class="white-text">NEED HELP ?</h6>
						<p class="text-lighten-4 footer-links">support@helpinghands.com</p>
						<p class="text-lighten-4 footer-links">+91 88888 88888</p>
					</div>

					<div class="col l4 offset-l2 s12">
						<h6 class="white-text">CUSTOMER CARE</h6>
						<ul>
							<li><a class=" text-lighten-3 footer-links" href="#!">Terms & Conditions</a></li>
							<li><a class=" text-lighten-3 footer-links" href="#!">FAQ's</a></li>
							<li><a class=" text-lighten-3 footer-links" href="#!">Privacy Policy</a></li>
							<li><a class=" text-lighten-3 footer-links" href="#!">Security Policy</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container">
					Copyright © 2021 | Helping Hands
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container" style={{ marginTop: "-40px" }}>
					{/* <p style={{ fontSize: "10px" }}>The Products Shown Are Only For Demo Purpose Not Intended For Selling.</p> */}
				</div>
			</div>
		</footer>
	)
}

export default Footer
