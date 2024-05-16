import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
		<div className="container">
			<div className="footer_in flex">
				<div classNameName="footer_info">
					<Link to="index.html" className="footer_logo">
						<img src="img/logo-footer.svg" alt=""/>
					</Link>
					<p className="footer_txt">In the new era of technology we look a in the future with certainty and pride
						to for our company and.</p>
					<div className="footer_icons flex">
						<Link to="" className="footer_ic footer_ic__tw">
							<img src="img/icons/footer_ic__tw.svg" alt=""/>
						</Link>
						<Link to="" className="footer_ic footer_ic__fb">
							<img src="img/icons/footer_ic__fb.svg" alt=""/>
						</Link>
						<Link to="" className="footer_ic footer_ic__inst">
							<img src="img/icons/footer_ic__inst.svg" alt=""/>
						</Link>
						<Link to="" className="footer_ic footer_ic__git">
							<img src="img/icons/footer_ic__tw.svg" alt=""/>
						</Link>
					</div>
				</div>
				<div className="footer_menu">
					<h4 className="footer_tit">Pages</h4>
					<ul className="footer_list">
						<li><Link to="">Home</Link></li>
						<li><Link to="">About</Link></li>
						<li><Link to="">Menu</Link></li>
						<li><Link to="">Pricing</Link></li>
						<li><Link to="">Blog</Link></li>
						<li><Link to="">Contact</Link></li>
						<li><Link to="">Delivery</Link></li>
					</ul>
				</div>
				<div className="footer_menu">
					<h4 className="footer_tit">Utility Pages</h4>
					<ul className="footer_list">
						<li><Link to="">Start Here</Link></li>
						<li><Link to="">Styleguide</Link></li>
						<li><Link to="">Password Protected</Link></li>
						<li><Link to="">404 Not Found</Link></li>
						<li><Link to="">Licenses</Link></li>
						<li><Link to="">Changelog</Link></li>
						<li><Link to="">View More</Link></li>
					</ul>
				</div>
				<div className="footer_imgs">
					<h4 className="footer_tit">Follow Us On Instagram</h4>
					<div className="footer_img-wrap flex ">
						<Link to="" className="footer_img"><img src="img/foto-1.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto-2.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto-3.jpg" alt=""/></Link>
						<Link to="" className="footer_img"><img src="img/foto-4.jpg" alt=""/></Link>
					</div>
				</div>
			</div>
			<p className="footer_copy">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

		</div>
	</footer>
    </>
  );
}

export default Footer;