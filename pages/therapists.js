/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Hero from "../components/Hero";
function therapists() {
  const therapist = [
    {
      bio: "Janet is certified in deep tissue massage, hot stone massage, body to body massage with touch and releases, nuru massage and many more.",
      brief:
        " Some of my favorite and in my opinion most effective modalities are Deep Tissue body to body Massage incorporated with Active Release Techniques, Structural Bodywork, Instrumented Assisted Soft Tissue Mobilization (IASTM), Sports Massage/ Stretching (incl. PNF) and Kinesiology Taping. I have a high interest in treating the whole body however I do love focusing on the waist & back to release all the tension/stiffness we all carry in our back",
      image: require("/public/images/gl10.jpg"),
    },
    {
      bio: "Juan specializes in Deep tissue, ART (active release therapy), IASTM (rock blades scraping) KT (Rock Tape).",
      brief:
        "I am from Norway and have been living in America for about 7 years where I also attained my Massage Therapy and Yoga Teacher License. To me Massage Therapy is such a rewarding profession that gives me the opportunity to make a direct positive impact on a clients health and therefore life.",
      image: require("/public/images/gl1.jpg"),
    },

    {
      bio: "Kyrie specializes in IASTM, medical massage, kinesiology taping, cannabliss massage and sports massage.",
      brief:
        "My hobbies include learning, hiking, reading, singing (in the shower mostly), dancing, painting, traveling and exercising (TRX, calisthenics, and kickboxing.",
      image: require("/public/images/gl9.jpg"),
    },
    {
      bio: "Josephine specializes in deep tissue, sports massage, stretching, hot stones, and CBD massage.",
      brief:
        "I am skilled in treating chronic pain and discomfort in the neck, shoulders, and back, in sciatic release, frozen shoulder, and plantar fasciitis.",
      image: require("/public/images/gl8.jpg"),
    },
    {
      bio: "Angela specializes in deep tissue massage, sports massage, hot stone massage, and CBD massage",
      brief:
        "While at massage school, I had the good fortune of learning from an amazing instructor who was also the massage therapist for the former San Diego Chargers.",
      image: require("/public/images/gl2.jpg"),
    },
    {
      bio: "Mary specializes in deep tissue massage, cupping therapy, hot stone massage, rose quartz Gua Sha facials, and relaxation.",
      brief:
        "Outside of work I have a family who keeps me busy. I am passionate about knitting, creating works of beauty, and participating in the Society for Creative Anachronisms.",
      image: require("/public/images/gl3.jpg"),
    },
    {
      bio: "Ariana specializes in deep tissue massage, injuries, and chronic tension, aromatherapy, neck and upper back dysfunctions.",
      brief:
        " Outside of massage, my passions include American Sign Language and working with the Deaf community",
      image: require("/public/images/gl4.jpg"),
    },
    {
      bio: "Michael specializes in Deep Tissue, Cannabliss Massage, Aromatherapy, and Hot Stone Massage",
      brief:
        "Massage therapy was the perfect choice. I also found that the flow of the movements were very relaxing to me. I still enjoy my gym time. I also compete in fitness competitions",
      image: require("/public/images/gl11.jpeg"),
    },
    {
      bio: "James specializes in Deep Tissue, Table Thai, Craniosacral therapy, CBD massage, and prenatal.",
      brief:
        "In any spare time I get, I like to ride motorcycles with my friends, and play with my dog",
      image: require("/public/images/gl12.jpeg"),
    },
    {
      bio: "Donald is proficient in assisted stretch, myofascial release, IASTM, structural bodywork and KT taping",
      brief:
        " I have been in the massage industry going on 7 years and I love learning new techniques and applications. I have a need to help and fix people. Bring me your most chronic issue and let’s work together to resolve it",
      image: require("/public/images/gl13.jpeg"),
    },
    {
      bio: "Lisa specialties include kinesiology, musculoskeletal therapy (deep tissue), hot/cold stones, myofascial release, active fascial stretching, sports medicine, medical massage, cranial-sacral, neuromuscular rehabilitation, and simple but powerful hands on faith-based prayer.",
      brief:
        "My hobbies include waking up early and talking to my dogs, studying, lots of studying, hiking, calisthenics, and cooking.",
      image: require("/public/images/gl5.jpg"),
    },
    {
      bio: "Christiana specializes in deep tissue massage, nuru massage, hot stone, sports massage/stretching, and plantar fasciitis.",
      brief:
        "Outside of massage, my passions include working out (TRX total body work outs, power-lifting, and kettle-bell work outs), cooking, cosplay, arts and crafts, and Mixed Martial Arts.",
      image: require("/public/images/gl6.jpg"),
    },
    {
      bio: "Roseline  specializes in deep tissue massage, cupping therapy, sports massage, stretching, kinesiology taping, and hot stone massage.",
      brief:
        " Working for A1 body massage therapy & body mechanic is the perfect fit for my style of massage. When you come in with a specific issue, I can use what I’ve learned from experience and the resources I have here to relieve the pain",
      image: require("/public/images/gl7.jpg"),
    },
  ];

  return (
    <div>
      <Head>
        <title>Meet Our Therapists</title>
        <meta property="og:title" content="Meet Our Therapists" key="title" />
      </Head>
      <Hero>
        <h1 className="hero-heading">Meet Our Therapists </h1>
      </Hero>

      <section className="container">
        <Card type="therapist-brief">
          <div className="card-contents">
            <p>
              At A1 massage therapy & body mechanic, we have over one thousand
              registered therapists across USA, but these are the list of
              verified therapist/masseuse
            </p>
          </div>
        </Card>
        <div className="therapists">
          {therapist.map(({ image, bio, brief }, key) => (
            <Card type="default" data-aos="fade-up" key={key}>
              <div className="therapist-image">
                <Image
                  layout="responsive"
                  height={300}
                  width={300}
                  src={image}
                  alt="therapist image"
                />
              </div>
              <div className="card-contents">
                <p className="bio">{bio}</p>
                <p className="brief">{`"${brief}"`}</p>
              </div>
              <h3 className="card-footer">{bio.split(" ")[0]}</h3>
            </Card>
          ))}
        </div>
      </section>
      <section className="package-section">
        <div className="container">
          <Card>
            <h1>New Clients</h1>

            <p>
              <Button type={"secondary"}>BOOK YOUR MASSAGE SESSION</Button>
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default therapists;
