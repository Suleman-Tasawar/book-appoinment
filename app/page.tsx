import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="hero bg-white/100 flex flex-col md:flex-col lg:flex-row ">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="chat chat-start">
                <div className="chat-bubble">
                  It's over Anakin,
                  <br />I have the high ground.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">You underestimate my power!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content text-center">
          <div className="max-w-md leading-10">
            <h1 className="text-5xl font-bold">Simplify Your Appointments</h1>
            <p className="py-6">
              Easily book, manage, and track appointments with our intuitive
              platform.
            </p>
            <button className="btn btn-neutral text-white rounded-[7px]">
              <Link href="./bookings">Book Your First Appointment</Link>
            </button>
          </div>
        </div>
      </section>
      <section className="stats shadow flex-col md:flex-col lg:flex-row my-20">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Current Servings</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">5.0 Feedback</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </section>
      <section className="">
        <h1 className="text-center font-bold">Our Staff</h1>
        <div className="carousel rounded-box w-96">
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="w-full"
              
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="w-full"
            />
            <h1>Docter </h1>
            <p>Docter Infor</p>
          </div>
        </div>
      </section>
    </main>
  );
}
