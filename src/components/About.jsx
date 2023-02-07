import React , { Component } from "react"
import about_img from "./images/1.jpg";

class About extends React.Component{

    about = ()=> {
          let div = document.getElementById("div");
       if (div.innerHTML != "") {
         div.innerHTML = "";
       } else {
         div.innerHTML = `
    <div class="About">
    <p>Egyserv as is an Egyptian joint stock company established on January 14, 2004 and its main activities are printing,enveloping and dispatching of banks correspondence, invoices,cheques ,cards As well as shipping services.  </p>
    <br>
    <p>The company was established at the invitation of the National Bank of Egypt to the shareholders to contribute to the company’s capital, where the capital of the company was set at 50 million Egyptians Pounds and the issued capital is 20 million.  </p>
    <br>
    <div class="images">    
    <img src="images/e1.jpg">
    <img src="images/e2.png">
    <img src="images/e3.png">
    </div>
    </div>
    `;
       }
    }
    ourMisson = () => {
        let div = document.getElementById("div");
       if (div.innerHTML != "") {
         div.innerHTML = "";
       } else {
         div.innerHTML = `
            <div class="About">
    <p>Through continuous development and optimal use of manpower and our geographical spread,</p>
    <br>
    <p>we seek to raise the level of services provided to clients and open new fields of business to achieve added value for shareholders, increase employee loyalty, and support civil society.    </p>
    </div>
    `;
       }
    }
    ourVision = () => {
        let div = document.getElementById("div");
    if (div.innerHTML != "") {
        div.innerHTML = "";
    } else {
        div.innerHTML = `
    <div class="About">
    <p>To make Egyserv the most trusted company for clients to provide logistical,</p>
    <br>
    <p>services of the highest quality in Egypt and the Middle East..</p>
    </div>
  `;
       }
     }
    render() {
        return (
          <section className="about">
            <div className="row">
              <div className="col-md-6">
                <div className="text-light text-center">
                  <h2>ABOUT US</h2>
                  <p>We Provide Fast & Safe Service to Our Customer</p>
                </div>
                <div className="btns text-center">
                  <button onClick={this.about}>About</button>
                  <button onClick={this.ourMisson}>Our Misson</button>
                  <button onClick={this.ourVision}>Our Vision</button>
                </div>
                <div id="div"></div>
              </div>
              <div className="col-md-6">
                <img src={about_img} alt="img" />
              </div>
            </div>
          </section>
        );
    }
}
export default About;