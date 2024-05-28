import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
//import logo as svg
import { ReactComponent as Clarity } from "../../lib/logo2.svg";
import MapIcon from '../../lib/icons/map-pin-simple-area-bold.svg';

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Beta Registration",
    // "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    // "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      style={{ background: "transparent" }}
      className="sm:mb-[8rem] mb-[4rem]"
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand href="/" as={Link}>
          
          <span
            style={{ color: "black" }}
            className="font-extrabold text-3xl text-black text-inherit align-middle"
          >
            Room<img src={MapIcon} alt="map" className="inline-block ml-1" />zy
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* <Link style={{ color: "black" }} href="#">
            Login
          </Link> */}
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            style={{ border: "1px solid #1a202c" }}
            target="_blank"
            variant="bordered"
            className="shadow-[0px_3px_0px_0px_#1a202c] "
          >
            Beta Registration
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
