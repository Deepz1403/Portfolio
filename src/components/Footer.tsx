"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <div className="text-center mb-8">
        <img src="/images/logo.png" alt="Logo" className="w-36 mx-auto mb-4" />
        <p className="max-w-md mx-auto font-ovo text-muted-foreground">
          I am a frontend developer with experience in React, Next.js, and
          modern web technologies. Let's build something amazing together.
        </p>
      </div>

      <Separator className="mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between px-[10%] gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 Your Name. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
