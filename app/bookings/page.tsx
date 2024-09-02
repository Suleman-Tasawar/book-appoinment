"use client";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import HeaderCard from "../components/HeaderCard";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DatePickerComponent from "../components/DatePicker";
import TimePickerComponent from "../components/TimePicker";
import TextArea from "../components/TextArea";

const Page: React.FC = () => {
  const router = useRouter();

  type BookData = {
    name: string;
    phone: string;
    email: string;
    dob: string;
    gender: string;
    reasons: string;
    allergies: string;
    appointmentDate: string;
    appointmentTime: string;
    whereAbout: string;
  };

  const [formData, setFormData] = useState<BookData>({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    reasons: "",
    allergies: "",
    appointmentDate: "",
    appointmentTime: "",
    whereAbout: "",
  });

  const [submit, setSubmit] = useState("Book Now");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (name: string, date: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }));
  };

  const handleTimeChange = (time: string | undefined) => {
    setFormData((prevData) => ({ ...prevData, appointmentTime: time || "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.phone) newErrors.phone = "Contact number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.reasons)
      newErrors.reasons = "Reason for appointment is required";
    if (!formData.appointmentDate)
      newErrors.appointmentDate = "Preferred appointment date is required";
    if (!formData.appointmentTime)
      newErrors.appointmentTime = "Preferred appointment time is required";
    if (!formData.whereAbout)
      newErrors.whereAbout = "Please specify how you heard about us";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
    setSubmit("Booking");
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmit("Book Now");
      if (response.ok) {
        router.push("/sucessful");
      } else {
        console.error("Network response was not ok");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Book an Appointment - BookEase</title>
        <meta
          name="description"
          content="Book your appointment online with BookEase. Use our easy-to-use form to schedule your next appointment."
        />
        <meta
          name="keywords"
          content="book appointment, schedule appointment, online booking form"
        />
        <meta property="og:title" content="Book an Appointment - BookEase" />
        <meta
          property="og:description"
          content="Book your appointment online with BookEase. Use our easy-to-use form to schedule your next appointment."
        />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:url" content="https://www.bookease.com/bookings" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bookease.com/bookings" />
      </Head>

      <main className="p-4 flex flex-col justify-center items-center">
        <div className="text-center">
          <HeaderCard
            title="Doctor's Appointment Form"
            titleClass="text-2xl"
            text="  Please fill out this form to be successfully able to book an appointment"
            textClass=""
          />
        </div>
        <div className=" mt-5 bg-white/80 backdrop-blur-md text-gray-900 p-5 rounded-lg">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="mt-[20px] grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3 justify-center items-center place-content-center">
              <TextInput
                inputName="name"
                prefix="Full Name"
                prefixClass="block text-sm font-medium text-gray-700"
                type="text"
                className="mb-4 text-gray-800"
                onChange={handleChange}
                errorMsg={errors.name}
                placeHolder="Your Full Name"
              />

              <DatePickerComponent
                label="Date of Birth"
                onChange={(date) =>
                  handleDateChange("dob", date ? date.format("YYYY-MM-DD") : "")
                }
                pastDisable={false}
                errorMsg={errors.dob}
              />

              <SelectInput
                label="Gender"
                options={[
                  { value: "1", label: "Male" },
                  { value: "2", label: "Female" },
                  { value: "3", label: "Prefer not to say" },
                ]}
                selectedValue={formData.gender}
                onChange={(e) => handleSelectChange("gender", e.target.value)}
                errorMsg={errors.gender}
              />

              <TextInput
                inputName="phone"
                prefix="Contact Number"
                prefixClass="block text-sm font-medium text-gray-700"
                type="tel"
                className="mb-4 text-gray-800"
                onChange={handleChange}
                errorMsg={errors.phone}
                placeHolder="Your Mobile Number"
              />

              <TextInput
                inputName="email"
                prefix="Email Address"
                prefixClass="block text-sm font-medium text-gray-700"
                type="email"
                className="mb-4 text-gray-800"
                onChange={handleChange}
                errorMsg={errors.email}
                placeHolder="Your Email Address"
              />

              <DatePickerComponent
                label="Preferred Appointment Date"
                onChange={(date) =>
                  handleDateChange(
                    "appointmentDate",
                    date ? date.format("YYYY-MM-DD") : ""
                  )
                }
                pastDisable={true}
                errorMsg={errors.appointmentDate}
              />

              <TimePickerComponent
                label="Preferred Appointment Time"
                time={
                  formData.appointmentTime
                    ? dayjs(formData.appointmentTime)
                    : null
                }
                setTime={(time) =>
                  handleTimeChange(time ? time.format("HH:mm") : "")
                }
                errorMsg={errors.appointmentTime}
              />

              <TextArea
                label="Reason for Appointment"
                labelClass="block text-sm font-medium text-gray-700"
                name="reasons"
                className="mt-1 text-gray-800 block w-full h-24 p-2 border rounded-md shadow-sm"
                placeHolder="Describe your reason for the appointment here"
                onChangeEvent={handleChange}
                errorMsg={errors.reasons}
              />

              <TextArea
                label="Known Allergies"
                labelClass="block text-sm font-medium text-gray-700"
                name="allergies"
                className="mt-1 text-gray-800 block w-full h-24 p-2 border rounded-md shadow-sm"
                placeHolder="List any known allergies here"
                onChangeEvent={handleChange}
              />

              <SelectInput
                label="How Did You Hear About Us?"
                options={[
                  { value: "Referral", label: "Referral" },
                  { value: "Online Search", label: "Online Search" },
                  { value: "Social Media", label: "Social Media" },
                  { value: "Other", label: "Other" },
                ]}
                selectedValue={formData.whereAbout}
                onChange={(e) =>
                  handleSelectChange("whereAbout", e.target.value)
                }
                errorMsg={errors.whereAbout}
              />
            </div>

            <button
              type="submit"
              disabled={submit === "Booking"}
              className="btn bg-blue-800 text-white mt-5 hover:bg-blue-400 rounded-[5px]"
            >
              {submit}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
