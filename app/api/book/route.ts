import { NextRequest, NextResponse } from 'next/server';

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

let bookAppointmentData: BookData[] = [
  {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "phone": "+1234567890",
    "dob": "1990-05-15",
    "gender": "Female",
    "reasons": "Routine check-up",
    "allergies": "None",
    "appointmentDate": "2024-09-01",
    "appointmentTime": "14:00",
    "whereAbout": "Online"
  }
  
];
export async function POST(request: NextRequest) {
  try {
    const data: BookData = await request.json();
    bookAppointmentData.push(data);

    return NextResponse.json({
      message: 'Appointment added successfully',
      data: bookAppointmentData,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add appointment' }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json(bookAppointmentData);
}
