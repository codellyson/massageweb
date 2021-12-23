/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Splits from "../components/Splits";
import GlassImage from "../public/images/2.webp";

export default function Home() {
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
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
      </Head>

      <Hero>
        <h3>Welcome...</h3>
        <h1 className="hero-heading"> A1 massage Therapy & body mechanic</h1>
        <Button type={"primary"}>Book Your Massage</Button>
      </Hero>
      <section className="container">
        <div className="brief-section">
          <Card>
            <h1 className="card-title">
              Why A1 massage Therapy & body mechanic is unique from others
            </h1>

            <p className="card-contents">
              We offer different type of massage experience. At A1 massage
              Therapy & body mechanic, you’ll never have the same treatment
              twice. That’s because our therapists & masseuse customize each
              session to what your body needs at that specific moment in time.
              Come on to our palace and leave the rest to us.
            </p>

            <div className="card-footer">
              <Link href={"/services"}>
                <a className={" btn secondary rounded"}>Our Services</a>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <section className="container">
        <Splits image={GlassImage}>
          <Card type="default">
            <h1 className="card-title">For Optimal Results</h1>

            <p className="card-contents">
              We frequently receive referrals from our trusted network of
              chiropractors, physical therapists, trainers, and gyms. If you’ve
              experienced an injury or body limitation, therapeutic massage can
              enhance the results you’ve witnessed from working with these
              health and medical professionals. Our therapists incorporate their
              knowledge of human anatomy into bodywork services, helping you
              speed up your journey to recovery.
            </p>
          </Card>
        </Splits>
      </section>
      <section className="container">
        <div className="wrapper">
          <h1 className="text-center">
            Hear From Guests Like You Read Our Reviews
          </h1>
          <div className="testimonials">
            {testimonials.map(({ quote, by }, key) => (
              <Card type="default" key={key}>
                <div className="card-contents">
                  <p>{`"${quote}"`}</p>
                </div>
                <div className="card-footer">
                  <p>{by}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
