"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University",
      year: "2020-2024",
      description: "Specialized in software development and web technologies",
      grade: "3.8 GPA",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your School",
      year: "2018-2020",
      description: "Science stream with Computer Science",
      grade: "95%",
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

      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {edu.institution}
                  </CardDescription>
                </div>
                <Badge variant="secondary">{edu.year}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{edu.description}</p>
              <Badge variant="outline">Grade: {edu.grade}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
