"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ThemeSwitcher } from "./ui/theme-switcher";
import Link from "next/link";
import { Toaster, toast } from "sonner";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const NavOptions = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Blog",
      link: "/posts",
    },
    {
      id: 3,
      name: "Products",
      link: "/products",
    },
    {
      id: 4,
      name: "Category",
      link: "/category",
    },
  ];

  return (
    <>
      <Navbar shouldHideOnScroll maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <Link className=" text-black dark:text-white" href="/">
            <p className="font-bold text-inherit">BSWS</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {NavOptions.map((e) => (
            <NavbarItem key={e.id}>
              <Button
                variant={
                  e.link == "/" + pathname.split("/")[1] ? "solid" : "light"
                }
                as={Link}
                color="primary"
                href={e.link}
                aria-current={
                  e.link == "/" + pathname.split("/")[1] ? "page" : "false"
                }
              >
                {e.name}
              </Button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
        <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!searchTerm) {
                    toast.error("Empty Search are not Allowed!");
                    return
                  }
                  router.push(`/search?q=${searchTerm}`);
                }}
              >
          <Input
            radius="full"
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
            classNames={{
              base: `hidden md:block w-[120px] transition-all ${
                searchHover && "w-[170px]"
              }`,
              mainWrapper: "",
              input: "text-small",
              inputWrapper:
                " font-normal min-h-7 h-7 text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder={searchHover ? "Type to Search ..." : "Search ..."}
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <ThemeSwitcher />
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarMenu>
            <NavbarMenuItem>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!searchTerm) {
                    toast.error("Empty Search are not Allowed!");
                    return
                  }
                  router.push(`/search?q=${searchTerm}`);
                }}
              >
                <Input
                  radius="sm"
                  classNames={{
                    base: "w-full md:hidden my-4",
                    mainWrapper: " w-full",
                    input: "text-small",
                    inputWrapper:
                      " font-normal min-h-12 text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  placeholder="Type to Search..."
                  size="sm"
                  startContent={<SearchIcon size={18} />}
                  type="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
            </NavbarMenuItem>
            {NavOptions.map((item, index) => (
              <NavbarMenuItem key={item.id}>
                <Button
                  variant={
                    item.link == "/" + pathname.split("/")[1]
                      ? "solid"
                      : "light"
                  }
                  color="primary"
                  className="w-full"
                  as={Link}
                  href={item.link}
                  size="lg"
                >
                  {item.name}
                </Button>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
      <Toaster richColors/>
    </>
  );
}
