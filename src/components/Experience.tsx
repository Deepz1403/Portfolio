"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Experience() {
  const experienceData = [
    {
      title: "Intern – Technology & Transformation",
      company: "Deloitte India",
      period: "June 2025 – July 2025",
      description: [
        "Built an automated disaster recovery controller for SAP BTP’s Kyma runtime using <strong>Kubernetes</strong>, reducing failover time by <strong>over 80%</strong> through real-time detection and replication of microservices across regions.",
        "Engineered configuration backup and restore workflows (secrets, envs, etc.) using <strong>Go</strong>, achieving <strong>95%+ recovery accuracy</strong>, ensuring seamless service continuity.",
        "Integrated <strong>DNS rerouting and alerting systems</strong> to improve incident response time by <strong>60%</strong>, increasing platform resilience in multi-region deployments.",
      ],
      skills: ["Kubernetes", "Go", "SAP BTP", "Kyma", "Microservices", "DNS"],
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
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/Images/Experience/Deloitte.png"
                  alt="Deloitte Logo"
                  width={60}
                  height={60}
                  className="rounded-full border border-muted p-1"
                />
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-foreground">
                    {exp.company}
                  </CardDescription>
                </div>
                <span className="italic text-foreground text-base">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-4">
              {Array.isArray(exp.description) ? (
                <ul className="list-disc list-inside text-foreground text-base mb-4 leading-relaxed">
                  {exp.description.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="mb-2 last:mb-0"
                      dangerouslySetInnerHTML={{ __html: point }}
                    ></li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground mb-4">{exp.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
