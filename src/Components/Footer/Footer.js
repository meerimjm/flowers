import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
		<div class="container">
			<div class="footer_in flex">
				<div class="footer_info">
					<a href="index.html" class="footer_logo">
						<img src="img/logo-footer.svg" alt=""/>
					</a>
					<p class="footer_txt">In the new era of technology we look a in the future with certainty and pride
						to for our company and.</p>
					<div class="footer_icons flex">
						<a href="" class="footer_ic footer_ic__tw">
							<img src="img/icons/footer_ic__tw.svg" alt=""/>
						</a>
						<a href="" class="footer_ic footer_ic__fb">
							<img src="img/icons/footer_ic__fb.svg" alt=""/>
						</a>
						<a href="" class="footer_ic footer_ic__inst">
							<img src="img/icons/footer_ic__inst.svg" alt=""/>
						</a>
						<a href="" class="footer_ic footer_ic__git">
							<img src="img/icons/footer_ic__tw.svg" alt=""/>
						</a>
					</div>
				</div>
				<div class="footer_menu">
					<h4 class="footer_tit">Pages</h4>
					<ul class="footer_list">
						<li><a href="">Home</a></li>
						<li><a href="">About</a></li>
						<li><a href="">Menu</a></li>
						<li><a href="">Pricing</a></li>
						<li><a href="">Blog</a></li>
						<li><a href="">Contact</a></li>
						<li><a href="">Delivery</a></li>
					</ul>
				</div>
				<div class="footer_menu">
					<h4 class="footer_tit">Utility Pages</h4>
					<ul class="footer_list">
						<li><a href="">Start Here</a></li>
						<li><a href="">Styleguide</a></li>
						<li><a href="">Password Protected</a></li>
						<li><a href="">404 Not Found</a></li>
						<li><a href="">Licenses</a></li>
						<li><a href="">Changelog</a></li>
						<li><a href="">View More</a></li>
					</ul>
				</div>
				<div class="footer_imgs">
					<h4 class="footer_tit">Follow Us On Instagram</h4>
					<div class="footer_img-wrap flex ">
						<a href="" class="footer_img"><img src="img/foto-1.jpg" alt=""/></a>
						<a href="" class="footer_img"><img src="img/foto-2.jpg" alt=""/></a>
						<a href="" class="footer_img"><img src="img/foto-3.jpg" alt=""/></a>
						<a href="" class="footer_img"><img src="img/foto-4.jpg" alt=""/></a>
					</div>
				</div>
			</div>
			<p class="footer_copy">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>

		</div>
	</footer>
    </>
  );
}

export default Footer;