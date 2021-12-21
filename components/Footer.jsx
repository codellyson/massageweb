import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaAngleRight,
} from "react-icons/fa";
import Button from "./button";
import Card from "./Card";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main-content">
          <Card type="default">
            <h2 className="card-title">Contact Us</h2>
            <ul className="footer-menu">
              <li className="footer-menu-item">
                <a href="tel:#@" className="footer-menu-item-link">
                  <span>
                    <FaPhone />
                  </span>
                  <span>(571) 888-5193</span>
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#@" className="footer-menu-item-link">
                  <span>
                    <FaEnvelope />
                  </span>
                  <span>info@unknowndomain.com</span>
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#@" className="footer-menu-item-link">
                  {" "}
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span>No.2 Unknown Location at some places</span>
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#@" className="footer-menu-item-link">
                  <span>
                    <FaExclamationCircle />
                  </span>
                  <span>Cancellation Policy</span>
                </a>
              </li>
            </ul>
          </Card>

          <Card type="default">
            <h2 className="card-title"> Working Hours</h2>
            <ul className="footer-menu">
              <li className="footer-menu-item">
                <a className="footer-menu-item-link">
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  <span> Monday-Friday 9am – 7pm</span>
                </a>
              </li>
              <li className="footer-menu-item">
                <a className="footer-menu-item-link">
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  <span> Saturday 7am – 5pm </span>
                </a>
              </li>
              <li className="footer-menu-item">
                <a className="footer-menu-item-link">
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  <span>Sunday 7am – 5pm</span>
                </a>
              </li>
            </ul>
          </Card>

          <Card type="default">
            <h2 className="card-title">First Time Visitors</h2>
            <p className="card-content">
              <Button type={"primary"}>Book Today!</Button>
            </p>
          </Card>
        </div>
      </div>
      <div className="footer-footer-content">
        <p className="right">
          © Copyright Yulli Therapeutic Massage | Powered by Limitless Media LLC
        </p>
        <p className="left">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
