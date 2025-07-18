"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  Hand,
  Github,
  Linkedin,
  Link,
} from "lucide-react";

const titles = [
  "a Full-Stack Developer",
  "an AI/ML Enthusiast",
  "a DevOps Enthusiast",
  "a Software Engineer",
];

export default function Header() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
      } else {
        setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
      }

      if (!isDeleting && displayedTitle === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedTitle === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(typingTimeout);
  }, [displayedTitle, isDeleting, titleIndex]);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 py-12">
      <div className="mb-4">
        <Image
          src="/Images/Home/Deepesh Gavali Photo.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full w-48 h-48 object-cover mx-auto"
        />
      </div>

      <h3 className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-2 font-ovo">
        Hi, I&apos;m Deepesh Gavali
        <Hand className="w-8 h-8 text-yellow-500" />
      </h3>

      <h1 className="text-2xl sm:text-5xl lg:text-[60px] font-ovo">
        I&apos;m {displayedTitle}
        <span className="animate-ping">|</span>
      </h1>

      <p className="max-w-2xl mx-auto font-ovo text-muted-foreground text-lg">
        I am a Final-Year Computer Science student with a passion for leveraging
        technology to solve real-world problems. I am committed to continuous
        learning and enjoy applying my software development skills to build
        impactful, user-centric applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Button asChild size="lg" className="font-ovo">
          <a href="#contact">
            Contact Me
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>

        <Button variant="outline" size="lg" asChild className="font-ovo">
          <a
            href="/Resume/Deepesh Gavali Resume.pdf"
            download="Deepesh Gavali Resume.pdf"
          >
            <Download className="w-4 h-4 mr-2" />
            My Resume
          </a>
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <a
          href="https://github.com/Deepz1403"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepeshgavali"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://linktr.ee/deepz143"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <Link className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
