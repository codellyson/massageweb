/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Splits from "../components/Splits";
import GlassImage from "../public/images/2.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Home" key="title" />
      </Head>

      <Hero>
        <h3>Massage That ... </h3>
        <h1 className="hero-heading"> HEALS | RESTORES | ENERGIZES</h1>
        <Button type={"primary"}>Book Your Massage</Button>
      </Hero>
      <section className="container">
        <div className="brief-section">
          <Card>
            <h1 className="card-title">
              Why Yulli Therapeutic Healing Center?
            </h1>

            <p className="card-contents">
              This is a different type of massage experience. At Yulli
              Therapeutic Healing Center you’ll never have the same treatment
              twice. That’s because our therapists customize each session to
              what your body needs at that specific moment in time. Step into
              our calming studio and leave the rest to us.
            </p>

            <div className="card-footer">
              <Button type={"secondary rounded"}>Our Services</Button>
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
          <h1 className="text-center">What Our Client Say</h1>
          <div className="testimonials">
            <Card type="default">
              <div className="card-contents">
                <p>
                  I have been visiting Yulli's practice for 2 years. In addition
                  to having an experienced and talented massage therapist, treat
                  yourself to the healing energy shared by dedicated and sincere
                  therapists. Be sure to purchase the multi visit package,
                  you'll want to return again!
                </p>
              </div>
              <div className="card-footer">
                <p>Karen Ford</p>
              </div>
            </Card>
            <Card type="default">
              <div className="card-contents">
                <p>
                  Excellent, special, a real treat! Yuli has a healing touch,
                  plus my back pain feels sooo much better and her spa creates a
                  beautiful and peaceful environment. Highly recommend.
                </p>
              </div>
              <div className="card-footer">
                <p>Vivi Pierce</p>
              </div>
            </Card>
            <Card type="default">
              <div className="card-contents">
                <p>
                  I have been visiting Yulli's practice for 2 years. In addition
                  to having an experienced and talented massage therapist, treat
                  yourself to the healing energy shared by dedicated and sincere
                  therapists. Be sure to purchase the multi visit package,
                  you'll want to return again!
                </p>
              </div>
              <div className="card-footer">
                <p>Karen Ford</p>
              </div>
            </Card>
            <Card type="default">
              <div className="card-contents">
                <p>
                  I've known Yulli for years - but I finally took the plunge to
                  try out massage therapy after a 20+ year hiatus. With a lot of
                  scars and damage to my body from a car accident, I frankly
                  wasn't comfortable with it but decided to do it - and I have
                  ZERO regrets. It was amazing. I'm now a client and plan to
                  incorporate this therapy into my self-care routine.
                </p>
              </div>
              <div className="card-footer">
                <p>George Sampson</p>
              </div>
            </Card>
            <Card type="default">
              <div className="card-contents">
                <p>
                  I had a phenomenal experience at Yulli Therapeutic Healing
                  Center! For the first time, I tried reiki followed by a
                  massage. I did not know what to expect with reiki, but I am
                  now a believer. I felt the energy moving in my body which gave
                  me total relaxation. Once I started my massage, I literally
                  felt as if I had been transported to another place. That’s how
                  relaxing this was for me. Afterwards, my mind body and spirit
                  felt in sync.
                </p>
              </div>
              <div className="card-footer">
                <p>R. Shaun Gause</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
