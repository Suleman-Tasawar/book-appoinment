"use client";
import {
  Box,
  Heading,
  Container,
  TextField,
  TextArea,
  Select,
  Button,
} from "@radix-ui/themes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { CreateBookingSchema } from "../Booking_Form_Schema";
import z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BookingForm = z.infer<typeof CreateBookingSchema>;

const BookRoute = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(CreateBookingSchema),
  });

  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const onSubmit: SubmitHandler<BookingForm> = async (data) => {
    try {
      setSubmit(true);
      await axios.post("/api/book", data);
      setSubmit(false);
      router.refresh();
    } catch (error) {
      setSubmit(false);
    }
  };
  return (
    <div>
      <Box
        as="div"
        className="w-full h-20 bg-blue-800 text-white text-center py-3"
      >
        <Heading>Book an Appointment Here</Heading>
      </Box>

      <Container className="max-w-xl mx-auto w-full mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box as="div" my="2">
            <TextField.Root
              {...register("name")}
              placeholder="Enter your Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <TextField.Root
              {...register("age")}
              type="number"
              placeholder="Enter your Age"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select.Root
                  size="3"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="Male">Male</Select.Item>
                    <Select.Item value="Female">Female</Select.Item>
                    <Select.Item value="Other">Others</Select.Item>
                  </Select.Content>
                </Select.Root>
              )}
            />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <TextField.Root
              {...register("email")}
              type="email"
              placeholder="Enter your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <TextField.Root
              {...register("phone")}
              type="tel"
              placeholder="Enter your Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <TextArea
              {...register("reason")}
              placeholder="Reason for Appointment"
              rows={4}
            />
            {errors.reason && (
              <p className="text-red-500 text-sm">{errors.reason.message}</p>
            )}
          </Box>

          <Box as="div" my="5">
            <TextField.Root {...register("date")} type="date" defaultValue="" />

            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </Box>

          <Box as="div" my="4">
            <Button type="submit" disabled={submit} className="w-full">
              {submit ? "Booking" : "Book Appointment"}
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default BookRoute;
