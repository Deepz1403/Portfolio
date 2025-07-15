"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillsData = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Language" },
    { name: "TypeScript", level: 75, category: "Language" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Styling" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Database" },
  ];

  const categories = [...new Set(skillsData.map((skill) => skill.category))];

  return (
    <div id="skills" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          What I Know
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Skills</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category}
                  <Badge variant="secondary">
                    {
                      skillsData.filter((skill) => skill.category === category)
                        .length
                    }
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
