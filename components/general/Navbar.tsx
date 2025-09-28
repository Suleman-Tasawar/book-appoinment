import { Text, Box } from "@radix-ui/themes";
import Link from "next/link";
const Navbar = () => {
  const Links = [
    { id: 1, text: "Book Now", Link: "/ook" },
    { id: 2, text: "Dashboard", Link: "/dashboard" },
  ];
  return (
    <nav className="flex h-12 items-center border-b">
      <Box>
        <Link href="/">
         <Text className="text-xl text-blue-600 font-bold">Book Easer</Text>
        </Link>
      </Box>
      <Box ml={"7"}>
        <ul className="flex justify-evenly items-center">
            {
                Links.map((link)=>(
                    <li className="ml-3" key={link.id}>
                        <Link href={link.Link}>{link.text}</Link>
                    </li>
                ))
            }
        </ul>
      </Box>
    </nav>
  );
};

export default Navbar;
