"use client";
import React, { useEffect, useState } from "react";
import HeaderCard from "../components/HeaderCard";
import { BookData } from "../utils/defination";
import { tableHeadings } from "../utils/data";
const Page = () => {

  const [bookingData, setBookingData] = useState<BookData[]>([]);
  //Fetching the appointment data as json from our api route.
  //Since it isnt linked with a DB yet so the data will be lost after page refresh
  const fetchBookingData = async () => {
    try {
      const response = await fetch("/api/book", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setBookingData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBookingData();
  }, []);

  return (
    <section className="min-h-screen">
      <div className="mt-5 text-center">
        <HeaderCard
          title="Booking data for patients"
          titleClass="text-3xl"
          text="You can easily approve or remove the bookings here"
          textClass="py-6"
        />
        {bookingData.length > 0 ? (
          <div className="m-5 p-5">
            <table className="table">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {tableHeadings.map((heading) => (
                    <th key={heading.id}>{heading.headName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/*Removing repitative task with mapping from an array*/}
                {bookingData.map((data) => (
                  <tr key={data.phone}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.dob}</td>
                    <td>{data.gender}</td>
                    <td>{data.reasons}</td>
                    <td>{data.allergies}</td>
                    <td>{data.appointmentDate}</td>
                    <td>{data.appointmentTime}</td>
                    <td>{data.whereAbout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-xl text-center mt-10">No Bookings Yet</h1>
        )}
      </div>
    </section>
  );
};

export default Page;
