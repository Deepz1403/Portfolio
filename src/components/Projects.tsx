"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projectsData = [
    {
      title: "PulseMail",
      description:
        "A scalable SaaS email newsletter platform with a custom editor, tiered Stripe subscriptions, and API integration for external websites.",
      image: "/images/work-1.png",
      technologies: ["Next.js", "TypeScript", "AstraDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "OrderMate",
      description:
        "An AI-powered order processing system featuring automated inventory control, dynamic pricing, sentiment analysis, and an interactive analytics dashboard.",
      image: "/images/work-2.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div id="projects" className="w-full px-4 md:px-8 lg:px-12 py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Portfolio
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-base px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" asChild>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
