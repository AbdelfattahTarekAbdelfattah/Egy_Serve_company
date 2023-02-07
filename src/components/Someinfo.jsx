import React , {Component} from "react";

class Someinfo extends React.Component {

    net = () => {
    let netDiv = document.getElementById("netd");
    if (netDiv.innerHTML === "") {
      netDiv.innerHTML = `
                  <p class="text-light">Every day, we go to great lengths to connect people and businesses all over the world. Delivering millions of parcels, documents and freight consignments with care and attention - because we understand how important each and every parcel is...    </p>
            `;
    } else {
      netDiv.innerHTML = "";
    }
  }
    prod_sec = () => {
           let psDiv = document.getElementById("bsd");
           let psBtn = document.getElementById("ps");
    if (psDiv.innerHTML === "") {
      psDiv.innerHTML = `
                <p class="text-light">EgyServ offers you Collection Service Through it, you can collect cash in accordance with the procedures of contracting with the authorities, and deposit the collected amounts in the accounts of the contracting parties.</p>
            `;
      psBtn.innerHTML = `<i class="fas fa-lock-open"></i> Prouduct Security`;
    } else {
      psDiv.innerHTML = "";
      psBtn.innerHTML = `<i class="fas fa-lock"></i> Prouduct Security`;
    }
  }
    render() {
        return (
          <section className="some-info">
            <div className="row">
              <div className="col-md-6 bg-img"></div>
              <div className="col-md-6">
                <div className="text-center text-light">
                  <h2>Why People Choose EgyServ?</h2>
                  <p>
                    using advanced methods and an expert and trained workforce
                    that currently exceeds 2100 employees and enjoys spread
                    throughout the Arab Republic of Egypt.
                  </p>
                </div>
                <div className="sBtn my-5 text-center">
                  <button onClick={this.net}>
                    <i className="fas fa-shuttle-van"></i> Our Network
                  </button>
                  <div id="netd"></div>
                  <button id="ps" onClick={this.prod_sec}>
                    <i className="fas fa-lock"></i> Prouduct Security
                  </button>
                  <div id="bsd"></div>
                  <button>
                    <i className="far fa-user"></i> Full Support
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
}
}

export default Someinfo;