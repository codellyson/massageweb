/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function about() {
  const testimonials = [
    {
      quote:
        "A1 massage therapy & body mechanic is a “Great place on all fronts. Friendly front desk staff - they engage so well. Good massage therapists that listen to the client and modify massage to meet the client's needs. Great place with great prices.",
      by: "Brent",
    },

    {
      quote:
        "I've visited A1 massage therapy & body mechanic several times and was so impressed with the staff, service, and massage quality that I purchased a membership!",
      by: "Darrell",
    },

    {
      quote:
        "I recommend A1 massage therapy & body mechanic to everyone. Was so amazing and relaxing. Will definitely be back again.",
      by: "Ruby",
    },

    {
      quote:
        "Just had a therapeutic Cupping massage at A1 massage therapy & body mechanic. Nothing short of amazing! She identified some trouble areas and demonstrated some stretches to prolong the benefits between my massages. The front desk gal was very knowledgeable and helped me select the right membership program for me. Nothing short of spectacular experience! Thank you!",
      by: "Christina",
    },

    {
      quote:
        "Love it here the people and atmosphere! At A1 massage therapy & body mechanic, They always take care of my family and I and we always leave relaxed! ",
      by: "Tandi",
    },

    {
      quote:
        "Really enjoyed this place, at A1 massage therapy & body mechanic, we did a couples massage for sisters. I've have always gotten massages all over the state's, and while visiting other countries and I'd say this was up there at top of list of U.S. spas. It's kind of typical spa place but much talent went into the massages.",
      by: "Denice",
    },

    {
      quote:
        "I’ve had a couple of massages here from various therapists at  A1 massage therapy & body mechanic. I gotta say, I love every single one of them but Janet is the best I swear.",
      by: "Jose",
    },

    {
      quote:
        "Everyone here at A1 massage therapy & body mechanic is awesome! Make sure you give these guys a try especially Janet. She's amazing. Thank you for the awesome service",
      by: "Sara",
    },

    {
      quote:
        "Amazing Relaxing Experience. I just wanted to give a HUGE thumbs up to Janet at A1 massage therapy & body mechanic. I had the most amazing massage and facial. The staff at A1 massage therapy & body mechanic is very friendly and professional. Best services I have ever received is from Janet.",
      by: "Sara",
    },

    {
      quote:
        "I have never had a massage before and getting one from A1 massage therapy & body mechanic far exceeded my expectations! The therapist was great! The rooms were nice, and it was all a very relaxing experience.",
      by: "Bryson",
    },

    {
      quote:
        "Janet is the best at A1 massage therapy & body mechanic! She knows what she’s doing and is consistent, with good manners! Book an appointment with her!",
      by: "Valerie",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta property="og:title" content="About" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">ABOUT US</h1>
      </Hero>
      <section className="container">
        <div className="brief-section _abt">
          <Card>
            <h1 className="card-title">
              Feel the paradise, from the inside & outside
            </h1>

            <div className="card-contents">
              <p>
                At A1 massage therapy & body mechanic, massage is more than a
                luxury. It’s a necessity.
              </p>
              <p>
                Walk into our studio after a bad day. Maybe your energy feels
                off, overwhelmed or in pain. The one thing you can trust is that
                when you come to us you'll be taken care of. <br /> To us,
                massage is about healing, restore, relax—inner and outer
                healing.
              </p>
              <p>
                That’s why we customize each session to what you need. Due to
                our extensive training and experience, our therapists & masseuse
                utilize various technics to help you feel alive, at peace,
                energized, and relaxed.
              </p>
            </div>

            <div className="card-footer">
              <Button type={"secondary rounded"}>Our Services</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="reflection-section">
        <div className="container">
          <Card>
            <h1 className="card-title">A1 Massage Therapy and Body Mechanic</h1>

            <div className="card-contents">
              <p>
                We offer different type of massage experience. At A1 massage
                Therapy & body mechanic, you’ll never have the same treatment
                twice. That’s because our therapists & masseuse customize each
                session to what your body needs at that specific moment in time.
                Come on to our palace and leave the rest to us.
              </p>{" "}
              <br />
              <h3>Benefits of Massage </h3>
              <ul>
                <li> Increases blood circulation</li>
                <li>
                  Chair massages to individuals struggling with Lyme disease.
                </li>
                <li>Helps eliminate toxins Breaks down muscular adhesion . </li>
                <li> Assists in the healing of soft-tissue injuries.</li>
                <li>Helps reduce muscular and nerve pain</li>
                <li> Increases joint mobilization </li>
                <li>Promotes relaxation and stress relief</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="slider-section">
        <h1>The Client Experience </h1>
        {/* <!-- Slider main container --> */}

        <Carousel showArrows={true} showIndicators="true" autoPlay={true}>
          {testimonials.map(({ quote, by }, key) => (
            // eslint-disable-next-line react/jsx-key
            <div className="swiper-slide" key={key}>
              <Card type="default">
                <div className="card-contents">
                  <p>{`"${quote}"`}</p>
                  <h4>&mdash;{by}</h4>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>

        <section className="container">
          <p className="text-center">
            New to us? From FAQs to special promotions, learn everything you
            need to know before stepping into our studio.
          </p>
        </section>
      </section>
    </div>
  );
}

export default about;
