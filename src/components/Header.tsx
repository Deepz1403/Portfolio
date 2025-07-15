"use client";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Hand } from "lucide-react";

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mb-4">
        <img
          src="/images/profile-pic.png"
          alt="Profile"
          className="rounded-full w-32 mx-auto"
        />
      </div>

      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Your Name
        <Hand className="w-6 h-6 text-yellow-500" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Frontend Developer
      </h1>

      <p className="max-w-2xl mx-auto font-ovo text-muted-foreground">
        I am a passionate frontend developer skilled in React.js, Next.js, and
        modern web technologies. I create beautiful, responsive, and
        user-friendly web applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button asChild size="lg" className="font-ovo">
          <a href="#contact">
            Contact me
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild className="font-ovo">
          <a href="/resume.pdf" download="YourName_Resume.pdf">
            <Download className="w-4 h-4 mr-2" />
            My resume
          </a>
        </Button>
      </div>
    </div>
  );
}
