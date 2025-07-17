"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";


export default function Education() {
  const educationData = [
    {
      title: "BE Computer Science & Engineering",
      institution: "Thapar Institute of Engineering & Technology, Patiala",
      year: "2022-2026",
      description: "CGPA : 8.21",
      image: "/Images/Education/Thapar Institute of Engineering & Technology.jpeg",
    },
    {
      title: "Class 12th",
      institution: "Namo Rims Junior College, Pune",
      year: "2021",
      description: "92.33%",
      image: "/Images/Education/Namo Rims Junior College.jpeg",
    },
    {
      title: "Class 10th",
      institution: "Hutchings High School, Pune",
      year: "2019",
      description: "94.33%",
      image: "/Images/Education/Hutchings High School.jpeg",
    },
  ];

  return (
    <div id="education" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Journey
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={edu.image}
                alt={edu.institution}
                width={400}
                height={192}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{edu.institution}</CardTitle>
              <CardDescription className="text-lg text-foreground">{edu.title}</CardDescription>
              <p className="text-base text-muted-foreground">{edu.year}</p>
              <p className="text-base text-muted-foreground">{edu.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
