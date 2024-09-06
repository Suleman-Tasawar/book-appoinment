import { BookData } from "@/app/utils/defination";

let bookAppointmentData: BookData[] = [];
export async function POST(request:Request) {
  const bookingData =  await request.json();
  bookAppointmentData.push(bookingData)
  return new Response(JSON.stringify(bookingData),{
    headers:{
      "Content-Type":"application/json",
    },
    status:201,
  })
}


export async function GET() {
  return Response.json(bookAppointmentData);
}
