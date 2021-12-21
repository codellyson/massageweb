import Head from "next/head";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Card from "../components/Card";
import Hero from "../components/Hero";

function contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">Contact</h1>
      </Hero>
      <section className="container">
        <div className="contact-brief">
          <Card>
            <h3 className="card-title">
              If you’d like to book an appointment you may do so online. If you
              have scheduling or service questions, please contact us by phone
              at (571) 888-5193.
            </h3>
          </Card>
        </div>
      </section>

      <section className="container">
        <div className="contact-section">
          <aside className="contact-details">
            <h1>Studio hours</h1>
            <p>Monday – Friday: 9am – 7pm</p>
            <p>Saturday – Sunday: 7am – 5pm</p>

            <br />
            <p className="contact-option">
              <span>
                <FaEnvelope />{" "}
              </span>{" "}
              <span>info@yullitherapeutic.com</span>
            </p>
            <p className="contact-option">
              <span>
                <FaPhone />
              </span>
              <span>(571) 888-5193 Facebook-f</span>
            </p>
          </aside>
          <aside className="contact-form">
            <div className="top">
              <div className="forms-1">
                <div>
                  <input type="text" placeholder="Firstname" />
                </div>
                <div>
                  <input type="text" placeholder="Lastname" />
                </div>
              </div>
              <div className="forms-2">
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div className="bottom">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </aside>
        </div>
      </section>
      {/* <section className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207378.7231205795!2d-79.96511109922291!3d36.37678535084296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8852f061b62670b1%3A0xeb04650125fcf87b!2sMadison%2C%20NC%2027025%2C%20USA!5e0!3m2!1sen!2sng!4v1640075706223!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section> */}
    </div>
  );
}

export default contact;
