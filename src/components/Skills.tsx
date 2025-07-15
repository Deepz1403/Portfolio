"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Skills() {
  const skillsData = [
    { name: "HTML", category: "Frontend", path: "/Images/Skills/HTML.png" },
    { name: "CSS", category: "Frontend", path: "/Images/Skills/CSS.png" },
    { name: "JavaScript", category: "Frontend", path: "/Images/Skills/JavaScript.png" },
    { name: "React", category: "Frontend", path: "/Images/Skills/Reactjs.png" },
    { name: "Node.js", category: "Backend", path: "/Images/Skills/Nodejs.png" },
    { name: "Express.js", category: "Backend", path: "/Images/Skills/Expressjs.png" },
    
    { name: "MongoDB", category: "Database", path: "/Images/Skills/MongoDB.png" },
    { name: "MySQL", category: "Database", path: "/Images/Skills/MySQL.png" },
    { name: "C/C++", category: "Languages", path: "/Images/Skills/C_C++.png" },
    { name: "Python", category: "Languages", path: "/Images/Skills/Python.png" },
    { name: "SQL", category: "Languages", path: "/Images/Skills/SQL.png" },
    { name: "AWS", category: "Cloud", path: "/Images/Skills/AWS.png" },
    { name: "Langchain", category: "AI&Tools", path: "/Images/Skills/Langchain.png" },
    { name: "Vector Databases", category: "AI&Tools", path: "/Images/Skills/Vector Databases.png" },
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
            <Card key={category} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-wrap justify-center gap-x-8 gap-y-6 p-6">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                      {skill.path && (
                        <Image
                          src={skill.path}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 object-contain mb-2 transition-transform duration-200 group-hover:scale-110"
                        />
                      )}
                      <span className="font-medium text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-200">{skill.name}</span>
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
