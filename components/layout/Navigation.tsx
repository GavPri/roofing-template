"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "../ui/logo";

const ITEMS = [
  {
    label: "Services",
    href: "/services",
    dropdownItems: [
      {
        title: "Residential Roofing",
        href: "/services/residential-roofing",
        description:
          "Complete roofing solutions for homes including installation and replacement",
      },
      {
        title: "Commercial Roofing",
        href: "/services/commercial-roofing",
        description:
          "Professional roofing services for businesses and industrial properties",
      },
      {
        title: "Roof Repair",
        href: "/services/roof-repair",
        description:
          "Expert roof repair services to fix leaks, damage, and extend roof life",
      },
      {
        title: "Emergency Roofing",
        href: "/services/emergency-roofing",
        description:
          "24/7 emergency roofing services for urgent repairs and storm damage",
      },
      {
        title: "Roof Inspection",
        href: "/services/roof-inspection",
        description:
          "Comprehensive roof inspections to identify potential issues early",
      },
      {
        title: "Gutter Services",
        href: "/services/gutter-services",
        description:
          "Gutter installation, repair, and maintenance to protect your property",
      },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const Navbar6 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-[125px] lg:h-36 bg-transparent backdrop-blur-md">
        <section className="fixed top-5 left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border-primary bg-background/70 backdrop-blur-md lg:top-12">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="/" className="flex shrink-0 items-center gap-2">
              <Logo size="xl" />
            </a>

            {/* Desktop Navigation */}
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList>
                {ITEMS.map((link) =>
                  link.dropdownItems ? (
                    <NavigationMenuItem key={link.label} className="">
                      <NavigationMenuTrigger className="bg-transparent! px-1.5 data-[state=open]:bg-accent/50 text-primary">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[400px] space-y-2 p-4">
                          {link.dropdownItems.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={item.href}
                                  className="group flex gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                                    <div className="mb-1 text-sm leading-none font-medium text-primary">
                                      {item.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-secondary">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.label} className="">
                      <a
                        href={link.href}
                        className={cn(
                          "relative bg-transparent px-1.5 text-sm font-medium text-primary"
                        )}
                      >
                        {link.label}
                      </a>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2.5">
              <a href="/login" className="max-lg:hidden">
                <Button variant="default">
                  <span className="relative z-10">Call Us</span>
                </Button>
              </a>

              {/* Hamburger Menu Button (Mobile Only) */}
              <button
                className="relative flex size-8 text-muted-foreground lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                      isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                      isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/*  Mobile Menu Navigation */}
          <div
            className={cn(
              "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden",
              isMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0"
            )}
          >
            <nav className="flex flex-1 flex-col divide-y divide-border">
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between text-base font-medium text-primary"
                    >
                      {link.label}
                      <ChevronRight
                        className={cn(
                          "size-4 transition-transform duration-200",
                          openDropdown === link.label ? "rotate-90" : ""
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === link.label
                          ? "mt-4 max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block rounded-md p-2 transition-colors hover:bg-accent"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            <div className="transition-transform duration-200 group-hover:translate-x-1">
                              <div className="font-medium text-primary">
                                {item.title}
                              </div>

                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </section>
      </div>

      {/* Full Screen Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export { Navbar6 };
