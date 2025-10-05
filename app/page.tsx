'use client';
import { Box, Button, Container, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link';
import Footer from '@/components/general/Footer';

export default function HomePage() {
  return (
    <Box
      className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white text-gray-900"
    >

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4">
        <Container className="text-center max-w-2xl py-20">
          <Heading size="8" className="mb-4">
            Seamless Appointment Booking
          </Heading>
          <Text as="p" size="4" mt={"4"} className="text-gray-600 mb-8">
            BookEaser helps you schedule appointments effortlessly. Whether it's a consultation, checkup, or personal service — we've got you covered.
          </Text>

          <Link href="/book">
            <Button size="4" mt={"4"} className="w-full sm:w-auto">
              Book Your Appointment
            </Button>
          </Link>
        </Container>
      </main>
      <Footer/>
     
    </Box>
  );
}
