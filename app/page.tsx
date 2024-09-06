import Head from "next/head";
import HeaderCard from "./components/HeaderCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Carousal from "./components/Carousal";
import { docterData } from "./utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Your Appointment - BookEase</title>
        <meta
          name="description"
          content="Schedule your appointments easily with BookEase. Find and book appointments with our easy-to-use booking system."
        />
        <meta
          name="keywords"
          content="appointment booking, schedule appointment, online booking"
        />
        <meta property="og:title" content="Book Your Appointment - BookEase" />
        <meta
          property="og:description"
          content="Schedule your appointments easily with BookEase. Find and book appointments with our easy-to-use booking system."
        />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:url" content="https://appointmentbooker.com" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://appointmentbooker.com" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="hero bg-white/100 flex flex-col md:flex-col lg:flex-row ">
          <div className="mockup-phone hidden md:block lg:block lg:w-[350px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 p-0">
                <div className="chat chat-start ml-[-110px]">
                  <div className="chat-bubble w-[200px]">
                    Heading over for my Appointment with docter 😃
                  </div>
                </div>
                <div className="chat chat-end mr-[-150px]">
                  <div className="chat-bubble">Take your time 😉</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-content text-center">
            <div className="max-w-md leading-10">
              <HeaderCard
                title="Simplify Your Appointments"
                titleClass="text-3xl lg:text-5xl"
                text="Easily book, manage, and track appointments with our intuitive platform."
                textClass="py-6"
              />
              <Button
                btnType=""
                btnLink="./bookings"
                btnText="Book Your First Appointment"
                className="btn btn-accent rounded-[5px] text-nowrap"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mt-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="mt-2">We offer the follwing services feel free to contact us related these services</p>
          </div>
          <Carousal />
        </section>
        <section className="mt-10 ">
          <h1 className="text-center text-3xl font-bold">
            Our Top Rated Docters
          </h1>
          <div className="mt-16 flex flex-col md:flex-col lg:flex-row gap-y-10 md:gap-y-10 lg:gap-y-0 lg:gap-x-10 justify-evenly items-center">
            {docterData.map((data) => (
              <Card
                key={data.title}
                title={data.title}
                image={data.image}
                badge={data.badge}
                text={data.text}
                actionBadge={data.actionBadge}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
