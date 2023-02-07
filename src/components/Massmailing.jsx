import React from 'react';
import malling_1 from "./images/Mailling_1.jpg";
import malling_2 from './images/mal_2.jpg';
import malling_3 from './images/mal_3.jpg';

const Massmailing = () => {
    return (
      <section className="Express Mass-mailing">
        <h2 className="title text-center">Mass Mailing</h2>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={malling_1} alt="" />
            </div>
            <div className="col-md-6">
              <div className="list text-center mx-5">
                <h1>
                  <span class="badge badge-primary bag">Features</span>
                </h1>
                <ul>
                  <li>
                    <p> Fast & Safe Delivery</p>
                  </li>
                  <li>
                    <p> Product Security</p>
                  </li>
                  <li>
                    <p> Secured Payment</p>
                  </li>
                  <li>
                    <p>Full Support</p>
                  </li>
                </ul>
              </div>

              <div className="list2 mt-5">
                <h1>
                  <span class="badge badge-primary bag my-3">Contact Us</span>
                </h1>
                <ul>
                  <li>
                    <a href="tel:19639">
                      <i className="fa fa-phone-alt"></i>19639
                    </a>
                  </li>
                  <li>
                    <a href="mailto:INFO@egyserv.com.eg">
                      <i class="fas fa-envelope"></i> INFO@egyserv.com.eg
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9+%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA+%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%AF%D9%8A%D8%A9+%D8%A7%D9%84%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A+EGYSERV%E2%80%AD/@30.0533685,31.2058452,17z/data=!4m5!3m4!1s0x145840b7c0accbd1:0x37d7a41bcce9da98!8m2!3d30.0533639!4d31.2080339">
                      <i class="fas fa-map-marker-alt"></i>
                      44 Abel Moneam Riad-ElMohandseen-Giza
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="has-p">
              <p>
                Dispatching large volume of Monthly and Quarterly banks accounts
                statements of accounts to the customer’s addresses.
              </p>
            </div>
          </div>

          <div className="row align-items-center images">
            <div className="col-md-5">
              <img src={malling_2} alt="" />
            </div>
            <div className="col-md-5">
              <img src={malling_3} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Massmailing;