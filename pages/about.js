import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Head from "next/head";
function about() {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <div>
      <Head>
        <title>About</title>
        <meta property="og:title" content="About" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">ABOUT US</h1>
      </Hero>
      <section className="container">
        <div className="brief-section _abt">
          <Card>
            <h1 className="card-title">Feel alive, from the inside-out.</h1>

            <p className="card-contents">
              At Yulli Therapeutic Healing Center, we see massage as more than a
              luxury. It’s a necessity. Patients often walk into our studio
              after a bad day. Maybe their energy feels off, they’re overwhelmed
              or in pain. The one thing they can trust is that when they come to
              us they’ll be taken care of. To us, massage is about healing—inner
              and outer healing. That’s why we customize each session to what
              you need. Due to our extensive training and experience, our
              therapists utilize various modalities to help you feel alive, at
              peace, energized, and relaxed
            </p>

            <div className="card-footer">
              <Button type={"secondary rounded"}>Our Services</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="reflection-section">
        <div className="container">
          <Card>
            <h1 className="card-title">GIVING BACK</h1>

            <div className="card-contents">
              <p>
                One of the core values of Yulli Therapeutic Healing Center is
                service to others. Growing up modestly in a small village in
                Peru, Yully experienced firsthand what it feels like to not have
                the little things you dream of. Filled with gratitude for her
                career, community, and colleagues, she now gives back a portion
                of proceeds every year to help children in need. Through your
                patronage, you have helped to provide:
              </p>

              <ul>
                <li>
                  {" "}
                  Christmas gifts for children in Piura, Peru, Yully’s hometown.
                </li>
                <li>
                  {" "}
                  Chair massages to individuals struggling with Lyme disease.
                </li>
                <li> Groceries for individuals in crisis at Second Story. </li>
                <li> Clothing for clients of The Women’s Center.</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="slider-section">
        <h1>The Client Experience </h1>
        {/* <!-- Slider main container --> */}
        <div className="swiper container">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            <div className="swiper-slide">
              <Card>
                <div className="card-contents">
                  <p>
                    I’ve had massages for close to 40 years and this place
                    absolutely tops them all. Excellent, massage therapists who
                    are all experienced in a wide range of techniques to soothe
                    your aches and pains.
                  </p>
                </div>
              </Card>
            </div>
            <div className="swiper-slide">
              <Card>
                <div className="card-contents">
                  <p>
                    This is the best massage I’ve ever had. The therapist was
                    truly amazing and as soon as I told her I’m a runner and
                    have an office job she knew exactly what to do.
                  </p>
                </div>
              </Card>
            </div>

            <div className="swiper-slide">
              {" "}
              <Card>
                <div className="card-contents">
                  <p>
                    Four months post right shoulder tendon repair surgery I hit
                    a plateau in range of motion and Yulli helped me get past
                    that in the first session. It was incredible!”
                  </p>
                </div>
              </Card>
            </div>
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    </div>
  );
}

export default about;
