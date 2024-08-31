"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  type BookData = {
    name: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    reasons: string;
    allergies: string;
    appointmentData: string;
    appointmentTime: string;
    whereAbout: string;
  };

  const tableHeadings = [
    { id: 1, headName: "Name" },
    { id: 2, headName: "Email" },
    { id: 3, headName: "Phone" },
    { id: 4, headName: "DOB" },
    { id: 5, headName: "Gender" },
    { id: 6, headName: "Reasons" },
    { id: 7, headName: "Allergies" },
    { id: 8, headName: "Appointment Date" },
    { id: 9, headName: "Appointment Time" },
    { id: 10, headName: "Know About Us" },
  ];

  const [bookingData, setBookingData] = useState<BookData[]>([]);

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

  console.log(bookingData);

  return (
    <section className="min-h-screen">
      <div className="mt-5">
        <h1 className="text-3xl text-center">Booking Data for Patients</h1>
        {
          bookingData.length >0?(
            <div className="m-5 p-5">
            <table className="table">
              <thead>
                <tr>
                  {tableHeadings.map((heading) => (
                    <th key={heading.id}>{heading.headName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookingData.map((data) => (
                  <tr key={data.phone}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.dob}</td>
                    <td>{data.gender}</td>
                    <td>{data.reasons}</td>
                    <td>{data.allergies}</td>
                    <td>{data.appointmentData}</td>
                    <td>{data.appointmentTime}</td>
                    <td>{data.whereAbout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          ):
          (<h1 className="text-3xl text-center">No Bookings Yest :)</h1>)
        }

      </div>
    </section>
  );
};

export default Page;
