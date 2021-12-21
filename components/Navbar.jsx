import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/images/logo.jpeg";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="nav-brand">
            <Image src={Logo} alt="logo" height={50} width={50} />
          </div>
          <div className="navbar-toggler">
            <button className="toggler btn" onClick={handleNav}>
              {showNav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className={`main-navigation ${showNav ? "mobile-nav" : ""}`}>
            <ul>
              <li>
                <Link href={"/"}>
                  <a onClick={() => setShowNav(false)}>Home</a>
                </Link>
              </li>
              <li>
                <Link href={"/services"}>
                  <a onClick={() => setShowNav(false)}>Services</a>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <a onClick={() => setShowNav(false)}>About Us</a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a onClick={() => setShowNav(false)}>Contacts</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
