"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 pb-8">
      <Separator className="mb-6" />

      <div className="relative text-center px-[10%]">
        <p className="text-sm text-muted-foreground">
          © 2025 Deepesh Gavali. All rights reserved.
        </p>
        <Button
          variant="outline"
          onClick={scrollToTop}
          className="absolute bottom-0 left-[10%]"
        >
          <ArrowUp className="mr-2 h-4 w-4" /> Back to Top
        </Button>
      </div>
    </footer>
  );
}