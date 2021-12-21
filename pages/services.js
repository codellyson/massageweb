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
function services() {
  return (
    <div>
      <Head>
        <title>Our Services</title>
        <meta property="og:title" content="Our Services" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">Services</h1>
        <p>Massage that heals your body so it can heal you.</p>
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
          <div className="card-contents">
            <p>
              We know it can be confusing trying to figure out which type of
              massage to book when all you know is that you need relief. That’s
              why we’ve made the booking process as easy as possible for you.
            </p>
            <p>
              Simply choose the length of therapeutic massage or specialty
              treatment you’d like and note any add-ons. Once you’re in the
              studio, we’ll assess your specific needs and take it from there.
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
                <a href="#!" className="btn secondary">
                  <span>Check Services</span>{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </p>
            </div>
          </Card>
        </Splits>
      </section>
      <section className="massage-options">
        <h1>Find the massage you need</h1>
        <div className="container">
          <Card key={1}>
            <div className="image-container">
              <Image src={SplitImage} alt="pic one" />
            </div>
            <p className="card-title">Therapeutic Massage</p>
            <div className="card-contents">
              <p>
                Our most popular service, therapeutic massage utilizes a variety
                of modalities, including Swedish, Deep Tissue, Sports, Medical,
                Cupping, and Trigger Point Therapy to improve circulation,
                reduce tension, and remove toxins from the body.
              </p>
              <h3>60 minutes: $120</h3>
              <h3>90 minutes: $160</h3>
            </div>
          </Card>
          <Card key={2}>
            <div className="image-container">
              <Image src={SplitImage} alt="pic one" />
            </div>
            <p className="card-title">Therapeutic Massage</p>
            <div className="card-contents">
              <p>
                Our most popular service, therapeutic massage utilizes a variety
                of modalities, including Swedish, Deep Tissue, Sports, Medical,
                Cupping, and Trigger Point Therapy to improve circulation,
                reduce tension, and remove toxins from the body.
              </p>
              <h3>60 minutes: $120</h3>
              <h3>90 minutes: $160</h3>
            </div>
          </Card>
          <Card key={3}>
            <div className="image-container">
              <Image src={SplitImage} alt="pic one" />
            </div>
            <p className="card-title">Therapeutic Massage</p>
            <div className="card-contents">
              <p>
                Our most popular service, therapeutic massage utilizes a variety
                of modalities, including Swedish, Deep Tissue, Sports, Medical,
                Cupping, and Trigger Point Therapy to improve circulation,
                reduce tension, and remove toxins from the body.
              </p>
              <h3>60 minutes: $120</h3>
              <h3>90 minutes: $160</h3>
            </div>
          </Card>
          <Card key={4}>
            <div className="image-container">
              <Image src={SplitImage} alt="pic one" />
            </div>
            <p className="card-title">Therapeutic Massage</p>
            <div className="card-contents">
              <p>
                Our most popular service, therapeutic massage utilizes a variety
                of modalities, including Swedish, Deep Tissue, Sports, Medical,
                Cupping, and Trigger Point Therapy to improve circulation,
                reduce tension, and remove toxins from the body.
              </p>
              <h3>60 minutes: $120</h3>
              <h3>90 minutes: $160</h3>
            </div>
          </Card>
          <Card key={5}>
            <div className="image-container">
              <Image src={SplitImage} alt="pic one" />
            </div>
            <p className="card-title">Therapeutic Massage</p>
            <div className="card-contents">
              <p>
                Our most popular service, therapeutic massage utilizes a variety
                of modalities, including Swedish, Deep Tissue, Sports, Medical,
                Cupping, and Trigger Point Therapy to improve circulation,
                reduce tension, and remove toxins from the body.
              </p>
              <h3>60 minutes: $120</h3>
              <h3>90 minutes: $160</h3>
            </div>
          </Card>
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
