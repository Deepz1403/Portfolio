"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experienceData = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2024 - Present",
      description:
        "Developed responsive web applications using React.js and Next.js. Collaborated with design teams to implement user interfaces.",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Web Developer Intern",
      company: "Startup Inc.",
      period: "2023 - 2024",
      description:
        "Built landing pages and maintained existing websites. Worked with HTML, CSS, JavaScript, and React.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <div id="experience" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Career
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Experience</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((exp, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">
                    {exp.company}
                  </CardDescription>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
