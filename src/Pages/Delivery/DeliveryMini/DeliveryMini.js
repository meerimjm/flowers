import './DeliveryMini.css';

function DeliveryMini() {
  return (
    <>
      <section className='DeliveryMini'>
        <div className="container">
			 <h2 class="page_tit">Contact Us</h2>
			
			 <p class="">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
			 <form action="">
				<form action="" class="form form_book">
					<div class="form_in flex">

						<div class="form_input">
							<span class="form_tit">Date</span>
							<input type="text" class="input" placeholder="04/01/2021">
						</div>
						<div class="form_input">
							<span class="form_tit">Time</span>
							<input type="text" class="input" placeholder="06:30 PM">
						</div>
					
						<div class="form_input form_input_big">
							<span class="form_tit">Total Person</span>
							<input type="text" class="input" placeholder="1 Person">
						</div>
						<div class="form_btn">
							<button class="btn btn_red">Book a Table</button>
						</div>
					</div>
				</form>
			  </form>
		   </div>
		   <div class="address">
			 <div class="address_in flex">
				<div class="address_card">
					<h4 class="address_tit">Call Us:</h4>
					<a href="tel:+1-234-567-8900" class="address_link">+1-234-567-8900</a>
				</div>
				<div class="address_card">
					<h4 class="address_tit">Hours</h4>
					<p class="address_txt">Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</p>
				</div>
				<div class="address_card">
					<h4 class="address_tit">Our Location:</h4>
					<p class="address_txt">23 Bridge Street             Nowhere Land, LA 12345 United States</p>
				</div>
			 </div>
		
	

	
        </div>
      </section>
    </>
  );
}

export default DeliveryMini;