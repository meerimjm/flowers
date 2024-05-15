import './Home.css';

function Home() {
  return (
    <>
      <section className="flofers flex">
        <div className='container'>
          <h2 className='sec_tit'>Доставка цветов в Караколе</h2>
          <p className='flofers_txt'>Режим работы 24/7</p>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='bouquet_cards flex'>
            <div className='bouquet_card'>
              <div className='bouquet_img'>
                <img src="" alt="" />
              </div>
              <p className="card_txt">Букет</p>
              <div className='card_tit'>"Нежность"</div>
              <div className='card_price'>2500с</div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;