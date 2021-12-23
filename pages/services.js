import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Splits from "../components/Splits";
import SplitImage from "../public/images/2.webp";
import Split2Image from "../public/images/4.webp";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Button from "../components/Button";
import founderImage from "../public/images/5.webp";
import Head from "next/head";
import Link from "next/link";
function services() {
  const massageService = [
    {
      title: "Ultimoot Massage",
      content:
        "Our signature massage. Unwind with a customized Swedish style massage designed to melt your muscles and relieve stress.",
    },

    {
      title: "Deep Tissue",
      content:
        "A therapeutic massage that uses extra firm pressure to focus on relieving deep, tight muscles and tension. This massage melts your stress away while making your body feel relaxed and at peace.",
    },

    {
      title: "Great Expectations (Pre-natal)",
      content:
        "A massage for mothers-to-be with a focus on particular sensitive areas such as lower back, hips, shoulders, and feet. The massage is customized to meet the needs during each phase of pregnancy. (Please note we do not provide massage for customers in their first trimester of pregnancy)",
    },

    {
      title: "Swaddle Me Please (Post-natal)",
      content:
        "Though the un-comforts of pregnancy are gone, moms now have new back and neck aches, sleepless nights, and all-around exhaustion. Take a break and let us help you recoop. This massage includes a targeted tummy treatment to help tone and tighten.",
    },

    {
      title: "Foot Massage",
      content:
        "Get a relaxing massage focused just on your feet and lower legs.",
    },

    {
      title: "Sports Knot",
      content:
        "For those extra sore muscles, treat yourself to our sports massage. Incorporates stretching, and deeper pressure to ease stiffness, as well as a special cold therapy cream to reach the deepest sore areas. We will have you back in ship shape in no time.",
    },

    {
      title: "No Sticks but Some Stones",
      content:
        "Melt into this massage which incorporates Himalayan Hot Stones throughout the massage. Himalayan Hot Stones begin to relax tight muscles and help the therapist work deeper muscle layers. Our stones are 100% pure Himalayan Pink Salt rich in 84 natural minerals which improve overall sense of well-being and reduce inflammation.",
    },
    {
      title: "Couples Massage",
      content:
        "Choose a massage and enjoy it with your significant other or friend in our private couples suite. Enjoy the duet massage at the same price as your massage of choice.",
    },

    {
      title: "Massage 101",
      content:
        "Want a lesson on massage techniques? Bring your significant other or friend and get a 30-minute lesson on how to give a great back and neck massage. Once you are a quasi-master, you and your partner can take a break and each enjoy a 60 minute Ultimoot Massage. A great idea for a fun night out.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Our Services</title>
        <meta property="og:title" content="Our Services" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">Services</h1>
      </Hero>

      <section className="container founder-profile">
        <Card>
          <Image src={founderImage} alt="Founder Image" />
          <div className="card-title">
            <h5>About the owner</h5>
            <h6>Janet Doe</h6>
          </div>
        </Card>
        <Card>
          {" "}
          <br />
          <h2
            style={{
              textTransform: "uppercase",
              marginBottom: "-1rem",
            }}
          >
            Important notice
          </h2>
          <div className="card-contents">
            <p>
              *BHC policy on contagious diseases or infections: for the health
              and safety of the BHC community, staff, and clients we do not
              accept clients in acute state of contagion. contagious diseases
              include: chicken pox, measles, mumps, tuberculosis, meningitis,
              whooping cough, SARS, Avian or similar type of influenza but not
              common seasonal flu, MRSA. BHC may chose to broaden this
              definition within its best interest and in accordance with
              information received through the Centers for Disease Control and
              Prevention (CDC) it is policy to protect our BHC community staff
              and clients from any contagious and infectious diseases.
            </p>
          </div>
        </Card>
      </section>

      <section className="container service-confirmation">
        <Splits image={Split2Image} type={"reverse"}>
          <Card>
            <div className="card-contents">
              <p>
                Whether you’ve seen numerous medical professionals to reduce
                your pain or are committed to taking care of your body as you
                train, we’re here to serve your needs. Many of us don’t even
                realize how much our bodies are compensating for underlying
                issues. By taking a comprehensive healing approach to massage,
                the Yulli Therapeutic team will read what your body needs to
                perform at its highest. After every visit you’ll walk out our
                door feeling refreshed with customized tips to extend your
                results.{" "}
              </p>

              <p>
                <Link href={"/services"}>
                  <a className="btn secondary">
                    <span>Check Services</span>{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </Link>
              </p>
            </div>
          </Card>
        </Splits>
      </section>
      <section className="massage-options">
        <h1>List of services includes</h1>
        <div className="container">
          {massageService.map(({ title, content }, key) => (
            <Card key={key}>
              <div className="image-container">
                <Image src={SplitImage} alt="pic one" />
              </div>
              <p className="card-title">{title}</p>
              <div className="card-contents">
                <p>{content}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="package-section">
        <div className="container">
          <Card>
            <h1>Package Specials</h1>
            <div className="card-contents">
              <p>Four 60-minute sessions: $395 ($85 savings)</p>
              <p>Four 90-minute sessions: $540 ($100 savings)</p>
            </div>
            <p>
              <Button type={"secondary"}>BOOK YOUR MASSAGE</Button>
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default services;
