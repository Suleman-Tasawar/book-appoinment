"use client";
import { Box, Button, Flex, Text, Link as RadixLink } from "@radix-ui/themes";
import Link from "next/link";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  const Links = [
    { id: 1, text: "Book Now", href: "/book" },
    { id: 2, text: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="h-14 py-5">
      <Flex justify="between" align="center">
        {/* Logo / Brand */}
        <Text as="p" size="5" weight="bold" color="blue">
          <Link href="/">Book Easer</Link>
        </Text>

        {/* Navigation Links */}
        <Flex align="center" gap="4">
          {Links.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.text}
            </Link>
          ))}

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="solid" color="blue" radius="large" size="2">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
