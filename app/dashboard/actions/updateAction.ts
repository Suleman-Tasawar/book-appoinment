"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateBookingStatus(formData: FormData) {
  const id = Number(formData.get("id"));
  const status = formData.get("status") as
    | "BOOKED"
    | "IN_REVIEW"
    | "CHECKED"
    | "DECLINED";

  if (!id || !status) return;

  await prisma.bookings.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/dashboard");
}
