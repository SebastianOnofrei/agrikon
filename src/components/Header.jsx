import React from 'react'
import './Header.scss'
import logo from '../assets/Logo.png'
import search from '../assets/searchnormal.png'
import shoppingCart from '../assets/shoppingcart.png'
import phone from '../assets/call.png'
const Header = () => {
  return (
		<nav>
			<div className="container">
				<img src={logo} alt="Agrikon" />
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Pages</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">News</a>
					</li>
				</ul>
				<div className="cart_and_button">
					<img src={search} alt="search" />
					<img src={shoppingCart} alt="cart" />
					<button>
						<img src={phone} alt="phone" />
						<div className="btn-text">
							Call anytime
							<a href="tel:012345678910">012345678910</a>
						</div>
					</button>
				</div>
			</div>
			<svg
				width="1920"
				height="137"
				viewBox="0 0 1920 137"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.6732 128.133L0 124.586V0H1920V135.67L1903.99 133.453L1889.99 135.67H1833.97L1813.3 133.453H1786.62L1775.95 130.35L1757.28 133.453H1742.61L1729.27 130.35H1710.59L1695.92 133.453L1683.92 130.35L1662.58 129.463L1637.24 130.35L1616.56 129.463L1595.89 124.586L1557.21 130.35L1540.53 129.463H1504.52L1494.52 128.133L1480.51 130.35H1461.84L1450.5 133.453H1437.17L1421.16 130.35L1396.48 137L1372.48 133.453L1346.47 137L1326.46 133.453H1309.79H1282.45L1272.44 130.35H1253.1L1225.76 133.453H1215.76L1208.42 130.35H1188.41L1171.74 129.463L1169.74 130.35L1162.4 127.689L1130.39 130.35H1123.06H1106.38L1089.71 133.453H1071.04H1041.03C1031.42 130.97 1014.8 132.419 1007.68 133.453C999.68 132.419 983.008 130.35 980.34 130.35H969.003C967.936 130.35 961 132.419 957.666 133.453L921.653 128.133L912.984 130.35L884.307 128.133V131.68L843.626 128.133H824.286H811.615L794.276 123.256H738.923L720.917 128.133H709.58H688.239H675.568C670.9 126.507 660.629 123.256 656.895 123.256C653.16 123.256 642.001 126.507 636.888 128.133H611.546C607.1 125.029 595.273 119.709 583.536 123.256C571.799 126.803 555.082 127.985 548.19 128.133L539.521 132.566C535.742 131.088 526.983 128.133 522.181 128.133C517.38 128.133 510.399 131.088 507.51 132.566C505.731 133.896 498.44 135.759 483.501 132.566C468.563 129.374 452.824 131.236 446.822 132.566H431.483H417.478H409.476L375.464 128.133H340.118H324.113L305.439 132.566H270.761H242.084H217.409L183.397 128.133L175.394 136.557H158.055L126.711 132.566H106.704H82.0285C77.7603 132.566 61.1323 129.611 53.3519 128.133L30.0104 124.586L18.6732 121.482V128.133Z"
					fill="white"
				/>
			</svg>
		</nav>
	);
}

export default Header