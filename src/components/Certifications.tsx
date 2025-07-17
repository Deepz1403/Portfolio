"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Certifications() {
  const certificationsData = [
    {
      title: "Network Defense",
      link: "https://www.credly.com/earner/earned/badge/44bce04b-1092-424c-9b48-50a357dbe5d6",
      image: "/Images/Certifications/Network Defense.png",
    },
    {
      title: "Ethical Hacker",
      link: "https://www.credly.com/earner/earned/badge/4943dba1-18aa-4ecd-94b6-d2be46f105dd",
      image: "/Images/Certifications/Ethical Hacker.png",
    },
    {
      title: "AWS Academy Cloud Security Foundations",
      link: "https://www.credly.com/earner/earned/badge/84244103-f248-468d-afd4-2e3627614156",
      image: "/Images/Certifications/AWS Academy Graduate - AWS Academy Cloud Security Foundations.png",
    },
    {
      title: "AWS Academy Cloud Security Builder",
      link: "https://www.credly.com/earner/earned/badge/52b7ffea-5d5b-4fa8-a189-917ba3087745",
      image: "/Images/Certifications/AWS Academy Graduate - AWS Academy Cloud Security Builder.png",
    },
  ];

  return (
    <div id="certifications" className="w-full px-4 md:px-8 lg:px-12 py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Credentials
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {certificationsData.map((cert, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-40 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-t-lg"
                />
              </div>
            </a>
            <CardHeader className="p-0">
              <CardTitle className="text-xl text-center">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <Button asChild className="w-full">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Credential
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}