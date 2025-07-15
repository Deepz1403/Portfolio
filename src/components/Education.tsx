"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const educationData = [
    {
      title: "BE Computer Science & Engineering",
      institution: "Thapar Institute of Engineering & Technology",
      year: "2022-2026",
      description: "CGPA : 8.21",
      image: "/Images/Thapar Institute of Engineering & Technology.jpeg",
    },
    {
      title: "Class 12th",
      institution: "Namo Rims Junior College",
      year: "2021",
      description: "92.33%",
      image: "/Images/Namo Rims Junior College.jpeg",
    },
    {
      title: "Class 10th",
      institution: "Hutchings High School",
      year: "2019",
      description: "94.33%",
      image: "/Images/Hutchings High School.jpeg",
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
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{edu.institution}</CardTitle>
              <CardDescription className="text-lg">{edu.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-base">{edu.year}</Badge>
                <Badge variant="outline" className="text-base">{edu.description}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
