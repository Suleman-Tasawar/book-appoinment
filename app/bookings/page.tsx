"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import DatePickerComponent from "../components/DatePicker";
import TimePickerComponent from "../components/TimePicker";
import TextArea from "../components/TextArea";

const Page: React.FC = () => {
  const router = useRouter();

  interface Gender {
    id: string;
    value: string;
  }

  const genderOptions: Gender[] = [
    { id: "1", value: "Male" },
    { id: "2", value: "Female" },
    { id: "3", value: "Prefer not to say" },
  ];
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
  }
  
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <main className="p-4 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Doctor's Appointment Form</h1>
        <p>
          Please fill out this form to be successfully able to book an
          appointment
        </p>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div className="mt-[20px] grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3 justify-center items-center place-content-center">
            <TextInput
              inputName="name"
              prefix="Full Name"
              prefixClass="block text-sm font-medium text-gray-700"
              type="text"
              className="mb-4"
              onChange={handleChange}
            />

            <DatePickerComponent
              label="Date of Birth"
              onChange={(date) =>
                handleDateChange("dob", date ? date.format("YYYY-MM-DD") : "")
              }
            />

            <SelectInput
              label="Gender"
              options={genderOptions.map((g) => ({
                value: g.value,
                label: g.value,
              }))}
              selectedValue={formData.gender}
              onChange={(e) => handleSelectChange("gender", e.target.value)}
            />

            <TextInput
              inputName="phone"
              prefix="Contact Number"
              prefixClass="block text-sm font-medium text-gray-700"
              type="tel"
              className="mb-4"
              onChange={handleChange}
            />

            <TextInput
              inputName="email"
              prefix="Email Address"
              prefixClass="block text-sm font-medium text-gray-700"
              type="email"
              className="mb-4"
              onChange={handleChange}
            />

            <DatePickerComponent
              label="Preferred Appointment Date"
              onChange={(date) =>
                handleDateChange(
                  "appointmentDate",
                  date ? date.format("YYYY-MM-DD") : ""
                )
              }
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
            />

            <TextArea
              label="Reason for Appointment"
              labelClass="block text-sm font-medium text-gray-700"
              name="reasons"
              className="mt-1 block w-full h-24 p-2 border rounded-md shadow-sm"
              placeHolder="Describe your reason for the appointment here"
              onChangeEvent={handleChange}
            />

            <TextArea
              label="Known Allergies"
              labelClass="block text-sm font-medium text-gray-700"
              name="allergies"
              className="mt-1 block w-full h-24 p-2 border rounded-md shadow-sm"
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
              onChange={(e) => handleSelectChange("whereAbout", e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-accent rounded-[5px]">
            Book Now
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
