import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // const validation = CreateBookingSchema.safeParse(body);
  // if (!validation.success) {
  //   return NextResponse.json(validation.error, { status: 400 });
  // }
  const newBooking = await prisma.bookings.create({
    data: {
      userName: body.name,
      age: body.age,
      gender: body.gender,
      email: body.email,
      reason: body.reason,
      phoneNo: body.phone,
      bookingDate: new Date(body.date).toISOString(),
    },
  });
  console.log(newBooking);
  return NextResponse.json(newBooking, { status: 201 });
}
