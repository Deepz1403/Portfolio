"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/Images/Home/Logo Light Mode.png");

  useEffect(() => {
    setLogoSrc(
      theme === "dark"
        ? "/Images/Home/Logo Dark Mode.png"
        : "/Images/Home/Logo Light Mode.png"
    );
  }, [theme]);

  const navItems = [
    { href: "#top", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src="/images/header-bg-color.png"
          alt=""
          width={800}
          height={600}
          className="w-full"
        />
      </div>

      <nav className="w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-background/80 backdrop-blur-md">
        <a href="#top">
          <Image
            src={logoSrc}
            alt="Logo"
            width={160}
            height={40}
            className="w-40 cursor-pointer mr-8"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-card/50 backdrop-blur-sm border">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-ovo hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button asChild className="hidden lg:flex font-ovo">
            <a href="#contact">
              Contact
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-ovo text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}