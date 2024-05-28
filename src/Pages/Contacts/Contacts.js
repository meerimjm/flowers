import './Contacts.css';

function Contacts() {
  return (
    <>
      <section class="book">
     <div class="container">
     <h2 class="page_tit">Связаться с нами</h2>
     <p class="page_desc">Мы считаем, что все движущие силы перемен дают вам те компоненты, которые вам необходимо изменить, чтобы создать действительно происходящее..</p>
     <form action="" class="form form_book">
         <div class="form_in flex">
     <div class="form_input">
     <span class="form_tit">Имя</span>
     <input type="text" class="input input_txt" placeholder="Введите ваше имя"/>
     </div>
     <div class="form_input">
      <span class="form_tit">Email</span>
      <input type="text" class="input input_txt" placeholder = "Введите адрес электронной почты"/>
     </div>
   
   
     <div class="form_input form_input_big">
     <span class="form_tit">Предмет</span>
      <input type="text" class="input input_txt" placeholder="Написать тему"/>
      </div>
   
     <div class="form_input form_input_big">
      <span class="form_tit">Сообщение
</span>
      <input type="text" class="input_messege  input_txt" placeholder="Напишите свое сообщение"/>
     </div>
          

     <div class="form_btn">
      <button class="btn btn_red" type="submit">Send</button>
     </div>
     </div>

     </form>
     </div>
       <div class="address">
       <div class="container">
      <div class="address_in flex">
     <div class="address_card">
       <h4 class="address_tit">Связаться с нами:</h4>
        <a href="tel:+12345678900" class="address_link">+1-234-567-8900</a>
      </div>
      <div class="address_card">
      <h4 class="address_tit">Hours</h4>
      <p class="address_txt">Mon-Fri: 11am - 8pm , </p>
      <p class="address_txt"> Sat Sun: 9am - 10pm</p>
     </div>
     <div class="address_card">
     <h4 class="address_tit">Our Location:</h4>
     <p class="address_txt">123 Bridge Street </p>
     <p class="address_txt">Nowhere Land,LA 12345</p>
     <p class="address_txt">United States</p>
    </div>

  </div>
 </div>
    </div>
 </section>
    </>
  );
}

export default Contacts;