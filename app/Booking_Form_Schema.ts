import z from "zod";

export const CreateBookingSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  age: z.string().min(1, "Enter your age"),
  gender: z.string().min(1, "Select a Gender"),
  email: z.string().optional(),
  phone: z.string().min(10, "Enter your phone number"),
  reason: z.string().min(12, "Enter a reason for checkup"),
  date: z.iso.date()
});
