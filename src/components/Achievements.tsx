"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal } from "lucide-react";

export default function Achievements() {
  const achievementsData = [
    {
      title: "Best Project Award",
      organization: "University Tech Fest",
      year: "2024",
      description: "Won first place for innovative web application",
      icon: Trophy,
      color: "text-yellow-600",
    },
    {
      title: "Certified React Developer",
      organization: "Meta",
      year: "2023",
      description: "Completed advanced React certification program",
      icon: Award,
      color: "text-blue-600",
    },
    {
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      year: "2023",
      description: "1st position in 48-hour coding challenge",
      icon: Medal,
      color: "text-green-600",
    },
  ];

  return (
    <div id="achievements" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Accomplishments
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Achievements</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-muted rounded-full">
                      <IconComponent
                        className={`w-8 h-8 ${achievement.color}`}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {achievement.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  <Badge variant="outline">{achievement.year}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
