"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarItem,
  Button,
} from "@nextui-org/react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo-svg";

export default function Header() {
  const router = useRouter();

  const menuItems = [
    { label: "Explore", route: "/explore" },
    { label: "Help", route: "/help" },
    { label: "Integrations", route: "#" },
    { label: "Login", route: "#" },
  ];

  return (
    <Navbar
      // position="sticky"
      disableAnimation={false}
      isBordered={false}
      isBlurred={true}
     shouldHideOnScroll className="bg-black-700"
    >
      {/* Content shows on smaller screens and hides on larger screens */}
      <NavbarContent className="sm:hidden pr-3" justify="start">
      <Link href="/" passHref>
          <NavbarBrand>
            <Logo />
            <h2 className="font-bold text-inherit">COLOGI</h2>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle />
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
      {/*=================================  */}

      {/*Content hides on smaller screens and shows on larger screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <Link href="/" passHref>
          <NavbarBrand>
            <Logo />
            <h2 className="font-bold text-inherit">COLOGI</h2>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={false}>
            <Link
              href={item.route}
              aria-current={router.pathname === item.route}
              className="text-slate-50"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
      {/*=================================*/}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.route} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
