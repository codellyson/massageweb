/* eslint-disable react/display-name */
import React, { useState } from "react";
import NextLink from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { useRouter } from "next/router";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const Link = React.forwardRef(
    ({ href, shallow, replace, children, passHref, className }, ref) => {
      return href ? (
        <NextLink
          href={href}
          passHref={passHref}
          scroll={false}
          shallow={shallow}
          replace={replace}
          prefetch={false}
          className={className}
        >
          {children}
        </NextLink>
      ) : (
        <div className={className}>{children}</div>
      );
    }
  );
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="nav-brand">
            <Link href={"/"} passHref={true}>
              <>
                <Image src={Logo} alt="logo" height={70} width={200} />
              </>
            </Link>
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
                  <a
                    onClick={() => setShowNav(false)}
                    className={router.pathname === "/" ? "current" : ""}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/services"}>
                  <a
                    onClick={() => setShowNav(false)}
                    className={router.pathname === "/services" ? "current" : ""}
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/therapists"}>
                  <a
                    onClick={() => setShowNav(false)}
                    className={
                      router.pathname === "/therapists" ? "current" : ""
                    }
                  >
                    Meet our Therapists
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <a
                    onClick={() => setShowNav(false)}
                    className={router.pathname === "/about" ? "current" : ""}
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a
                    onClick={() => setShowNav(false)}
                    className={router.pathname === "/contact" ? "current" : ""}
                  >
                    Contacts
                  </a>
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
