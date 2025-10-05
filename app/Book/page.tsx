"use client";
import {
  Box,
  Heading,
  Container,
  TextField,
  TextArea,
  Select,
  Button,
  Flex,
  Text,
} from "@radix-ui/themes";
import DatePicker from "react-datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { CreateBookingSchema, BookingForm } from "../Booking_Form_Schema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookRoute = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(CreateBookingSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const router = useRouter();
  const [submit, setSubmit] = useState(false);

  const onSubmit: SubmitHandler<BookingForm> = async (data) => {
    try {
      setSubmit(true);
      await axios.post("/api/book", data);
      setSubmit(false);
      router.push("/sucess");
    } catch (error) {
      setSubmit(false);
    }
  };

  return (
    <Box>
      <Box className="w-full bg-blue-800 text-white text-center py-5">
        <Heading size="6">Book an Appointment</Heading>
      </Box>

      <Container className="max-w-xl mx-auto w-full mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="4">
            {/* Name */}
            <Box>
              <label htmlFor="name">Full Name</label>
              <TextField.Root
                id="name"
                placeholder="Enter your Full Name"
                {...register("name")}
              />
              {errors.name && (
                <Text color="red" size="2">
                  {errors.name.message}
                </Text>
              )}
            </Box>

            {/* Age */}
            <Box>
              <label htmlFor="age">Age</label>
              <TextField.Root
                id="age"
                type="number"
                placeholder="Enter your Age"
                {...register("age")}
              />
              {errors.age && (
                <Text color="red" size="2">
                  {errors.age.message}
                </Text>
              )}
            </Box>

            {/* Gender */}
            <Box>
              <label htmlFor="gender">Gender</label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select.Root
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <Select.Trigger id="gender" />
                    <Select.Content>
                      <Select.Item value="Male">Male</Select.Item>
                      <Select.Item value="Female">Female</Select.Item>
                      <Select.Item value="Other">Other</Select.Item>
                    </Select.Content>
                  </Select.Root>
                )}
              />
              {errors.gender && (
                <Text color="red" size="2">
                  {errors.gender.message}
                </Text>
              )}
            </Box>

            {/* Email */}
            <Box>
              <label htmlFor="email">Email</label>
              <TextField.Root
                id="email"
                type="email"
                placeholder="Enter your Email"
                {...register("email")}
              />
              {errors.email && (
                <Text color="red" size="2">
                  {errors.email.message}
                </Text>
              )}
            </Box>

            {/* Phone */}
            <Box>
              <label htmlFor="phone">Phone Number</label>
              <TextField.Root
                id="phone"
                type="tel"
                placeholder="Enter your Phone Number"
                {...register("phone")}
              />
              {errors.phone && (
                <Text color="red" size="2">
                  {errors.phone.message}
                </Text>
              )}
            </Box>

            {/* Reason */}
            <Box>
              <label htmlFor="reason">Reason</label>
              <TextArea
                id="reason"
                placeholder="Reason for Appointment"
                rows={4}
                {...register("reason")}
              />
              {errors.reason && (
                <Text color="red" size="2">
                  {errors.reason.message}
                </Text>
              )}
            </Box>

            {/* Booking Date */}
            <Box>
              <label htmlFor="date">Booking Date</label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value ?? null}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                )}
              />
              {errors.date && (
                <Text color="red" size="2">
                  {errors.date.message}
                </Text>
              )}
            </Box>

            {/* Submit Button */}
            <Button type="submit" disabled={submit} size="3" className="mt-4">
              {submit ? "Booking..." : "Book Appointment"}
            </Button>
          </Flex>
        </form>
      </Container>
    </Box>
  );
};

export default BookRoute;
