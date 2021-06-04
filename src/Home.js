export default function Home() {
    return (
       <main>
           <section className="onee">
                <div className="img-back">
                    <img src="./img/paintback.jpg" alt=""/>
                </div>
                <div className="saying-btn">
                    <h1>Paint shopping, made simple</h1>
                <button>FIND YOUR COLOR</button>
                </div>
            </section>

            <section className="everything-img">                    
                    <div className="everything-icon">
                        <h1>Everything you need to paint, delivered.</h1>
                        <p>We make paint shopping simple with designer-curated colors, mess-free peel and stick paint swatches, and premium, zero VOC paint delivered to your door.</p>
                        <div className="icons">
                            <div className="service-name">
                                <img src="./img/dilivery.jpg" alt=""/>
                                <p>Speedy Delivery</p>
                            </div>
                            <div className="service-name">
                                <img src="./img/order.png" alt=""/>
                                <p>Orders $100+ Ship Free</p>
                            </div>
                            <div className="service-name">
                                <img src="./img/happy.png" alt=""/>
                                <p>Happiness Guarantee</p>
                            </div>
                        </div>
                    </div>

                    <img src="./img/about.jpg" alt=""/>
            </section>
       </main>
    )
}
