import React, { Fragment } from "react";
import home_i1 from "./images/parid.jpg";
import home_i2 from "./images/44.jpg";
import home_i3 from "./images/Mailling_1.jpg";
import home_i4 from "./images/66.jpg";
import home_i5 from "./images/i5.jpg";
import home_i6 from "./images/i2.jpg";
import home_i7 from "./images/i3.jpg";
import home_i8 from "./images/i1.jpg";
import about_img from "./images/1.jpg";
import home_image_1 from "./images/20.jpg";
import home_image_2 from "./images/21.jpg";
import home_image_3 from "./images/18.jpg";
import { Link } from "react-router-dom";
import About from "./About";
import Someinfo from "./Someinfo";

const Home = () => {  
  return (
    <Fragment>
      <section className="home">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>Your Trust means our success ..</p>
            <h2 className="home-h2">
              The best express shipping{" "}
              <span>solutions and postal services</span>
            </h2>
            <a href="#" className="btn">
              Tracking
            </a>
          </div>
          <div className="col-md-6">
            <div className="login">
              <h2>Get A Quick Shipping Rate</h2>
              <div className="inputs">
                <input type="number" placeholder="Length cm" />
                <input type="number" placeholder="Hight cm" />
                <input type="number" placeholder="Width cm" />
                <input type="number" placeholder="Weight Km" />
                <input type="email" placeholder="Your Email" />
                <select
                  className="Select2"
                  data-val="true"
                  data-val-required="The FromCityId field is required."
                  id="FromCityId"
                  name="FromCityId"
                >
                  <option value="12">Aswan&#xD;&#xA;</option>
                  <option value="16">Asyut&#xD;&#xA;</option>
                  <option value="3">Alexandria&#xD;&#xA;</option>
                  <option value="7">Ismailia&#xD;&#xA;</option>
                  <option value="13">Luxor&#xD;&#xA;</option>
                  <option value="11">The Red Sea&#xD;&#xA;</option>
                  <option value="21">Albuhyrh&#xD;&#xA;</option>
                  <option value="28">Giza&#xD;&#xA;</option>
                  <option value="24">AlDakahlia&#xD;&#xA;</option>
                  <option value="31">Salloum and Siwa</option>
                  <option value="8">Suez&#xD;&#xA;</option>
                  <option value="23">Alshrqyh&#xD;&#xA;</option>
                  <option value="22">Alghrbyh&#xD;&#xA;</option>
                  <option value="19">Fayoum&#xD;&#xA;</option>
                  <option value="1">Cairo&#xD;&#xA;</option>
                  <option value="20">Qalyubia&#xD;&#xA;</option>
                  <option value="2">New Cities&#xD;&#xA;</option>
                  <option value="25">Menoufia&#xD;&#xA;</option>
                  <option value="17">Minya&#xD;&#xA;</option>
                  <option value="27">alwada aljdyd&#xD;&#xA;</option>
                  <option value="18">Bani Sweif&#xD;&#xA;</option>
                  <option value="5">Port Said&#xD;&#xA;</option>
                  <option value="9">South of Sinaa&#xD;&#xA;</option>
                  <option value="32">Halayeb and Shalateen</option>
                  <option value="6">Damietta&#xD;&#xA;</option>
                  <option value="15">Sohag&#xD;&#xA;</option>
                  <option value="10">North Sinai&#xD;&#xA;</option>
                  <option value="14">Qena&#xD;&#xA;</option>
                  <option value="26">Kafr El-Sheikh&#xD;&#xA;</option>
                  <option value="4">Matruh&#xD;&#xA;</option>
                </select>
                <br />
                <input type="submit" className="submit" value="Calc" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="down-home">
        <div className="container">
          <div className="row">
            <div className="col-md-2 card">
              <div className="i-bg">
                <i className="fas fa-shuttle-van"></i>
              </div>
              <p className="down-span">2.3M</p>
              <h5>Monthly Deliveries</h5>
            </div>
            <div className="col-md-2 card">
              <div className="i-bg">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p className="down-span">29</p>
              <h5>Branches</h5>
            </div>
            <div className="col-md-2 card">
              <div className="i-bg">
                <i className="fas fa-users"></i>
              </div>
              <p className="down-span">9</p>
              <h5>Outlets</h5>
            </div>
            <div className="col-md-2 card">
              <div className="i-bg">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <p className="down-span">18</p>
              <h5>Years Experience</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="text-center">
          <h2 className="text-light">
            <span>Our </span>Services</h2>
          <h4 className="text-light">
            We provide our services all over the world
          </h4>
        </div>
        <div className="row my-5">
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Express courier</h5>
                <p className="card-text">
                  Where shipments are collected and processed from the sending
                  party, and delivered to the destination across the country.
                </p>
                <Link to="/Express">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i2} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Printing</h5>
                <p className="card-text">
                  We Have a production line that is one of the largest
                  production lines among companies operating in the field of
                  printing.
                </p>
                <Link to="/printing">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i3} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Mass Mailing</h5>
                <p className="card-text">
                  Dispatching large volume of Monthly and Quarterly banks
                  accounts statements of accounts to the customer’s addresses.
                </p>
                <Link to="/Mailing">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i4} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Field Investigation</h5>
                <p className="card-text">
                  collect the possible information about banks Or companies
                  potential credit customers and their businesses.
                </p>
                <Link to="/Field">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i5} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Enveloping</h5>
                <p className="card-text">
                  The company owns an automatic enveloping line that uses the
                  latest machines in the market operated by experienced
                  workforce.
                </p>
                <Link to="/Enveloping">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i6} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Cash Collection</h5>
                <p className="card-text">
                  We collects cash in accordance with the contracting procedures
                  with the client and deposits the collected amounts in the
                  accounts of the contracting parties.
                </p>
                <Link to='/cash'>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i7} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Electronic Account Statements</h5>
                <p className="card-text">
                  Account statements are received from the bank and sent to the
                  bank’s customers e-mail through secure.
                </p>
                 <Link to="/Electronic">
                <a href="#" className="btn btn-primary">
                  Read More
                  </a>
                  </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top" src={home_i8} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Inter Branch Couriering</h5>
                <p className="card-text">
                  In order to link the head offices to the entire branches
                  network of banks and large companies spread all over the
                  country.
                </p>
                <Link to="/InterBranch">
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Someinfo />
      <section className="before-footer">
        <div className="swips">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={home_image_1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={home_image_2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={home_image_3}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;