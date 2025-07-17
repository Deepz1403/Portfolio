"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Monitor, Server, Database, Code2, Cloud, Cpu, Edit } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", path: "/Images/Skills/HTML.png" },
        { name: "CSS", path: "/Images/Skills/CSS.png" },
        { name: "JavaScript", path: "/Images/Skills/JavaScript.png" },
        { name: "React", path: "/Images/Skills/Reactjs.png" },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", path: "/Images/Skills/Nodejs.png" },
        { name: "Express.js", path: "/Images/Skills/Expressjs.png" },
      ],
    },
    {
      category: "Database Management",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MongoDB", path: "/Images/Skills/MongoDB.png" },
        { name: "MySQL", path: "/Images/Skills/MySQL.png" },
      ],
    },
    {
      category: "Programming Languages",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "C/C++", path: "/Images/Skills/C_C++.png" },
        { name: "Python", path: "/Images/Skills/Python.png" },
        { name: "SQL", path: "/Images/Skills/SQL.png" },
      ],
    },
    {
      category: "Cloud",
      icon: Cloud,
      color: "from-indigo-500 to-blue-500",
      skills: [{ name: "AWS", path: "/Images/Skills/AWS.png" }],
    },
    {
      category: "AI & Tools",
      icon: Cpu,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Langchain", path: "/Images/Skills/Langchain.png" },
        {
          name: "Vector Databases",
          path: "/Images/Skills/Vector Databases.png",
        },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="w-full px-4 md:px-8 lg:px-12 py-20 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          What I Know
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillsData.map((categoryData, categoryIndex) => {
          const IconComponent = categoryData.icon;
          return (
            <Card
              key={categoryIndex}
              className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${categoryData.color} text-white shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-ovo">{categoryData.category}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow mt-4">
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 p-2 rounded-lg border border-transparent transition-colors">
                      {skill.path && (
                        <Image
                          src={skill.path}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      )}
                      <span className="font-medium text-lg text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
#nothing to edit