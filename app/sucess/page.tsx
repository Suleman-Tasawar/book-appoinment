"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ThickCheckIcon } from "@radix-ui/themes";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <Dialog.Root open>
        <Dialog.Portal>
            <Dialog.Title>Booked an Appointment</Dialog.Title>
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          <Dialog.Content aria-describedby="Sucess" className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <ThickCheckIcon className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Success!</h1>
            <p className="text-gray-600">
              Your Appointment Has been booked You will be notified thought email
            </p>
            <Link
              href="/"
              className="inline-block bg-green-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Go Home
            </Link>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
