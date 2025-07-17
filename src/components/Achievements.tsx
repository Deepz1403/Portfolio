"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Achievements() {
  const achievementsData = [
    {
      title: "Deloitte Hacksplosion",
      organization: "Hackathon",
      description:
        "Achieved a <strong>top 15 ranking</strong> out of <strong>3,000+ teams</strong> in Deloitte's prestigious national hackathon by developing an <strong>innovative data-driven solution</strong> addressing complex business challenges.",
      image: "/Images/Achievements/Deloitte Hacksplosion.jpeg",
    },
    {
      title:
        "Joint Overall Student Coordinator – Center for Training and Development (CTD)",
      organization: "Position of Responsibility",
      description:
        "<strong>Led the planning and execution</strong> of a week-long Placement Symposium for <strong>1,700+ students</strong>, and coordinated <strong>guest speakers</strong>, <strong>industry professionals</strong>, and <strong>training sessions</strong> across multiple departments.",
      image: "/Images/Achievements/CTD.png",
    },
    {
      title: "Core Member – Saturnalia",
      organization: "Position of Responsibility",
      description:
        "Played a pivotal role in organizing Saturnalia, the official fest of Thapar Institute of Engineering and Technology, by <strong>managing logistics for 10,000+ attendees</strong>, overseeing event <strong>scheduling across 3 days</strong>, and leading cross-<strong>functional coordination among 50+ volunteers</strong>.",
      image: "/Images/Achievements/Saturnalia.jpeg",
    },
  ];

  return (
    <div id="achievements" className="w-full px-[12%] py-12 scroll-mt-20">
      <div className="text-center mb-8">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          My Accomplishments
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Achievements</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4 auto-rows-fr">
          {achievementsData.map((achievement, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group p-0 flex flex-col h-full"
              >
                <div
                  className={`flex ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } h-full min-h-[10rem]`}
                >
                  <div className="relative w-1/3 h-full overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col p-4 w-2/3 h-full">
                    <div className="flex-shrink-0 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-1 bg-blue-500 dark:bg-sky-300 rounded-full"></div>
                        <CardDescription className="text-blue-600 dark:text-sky-400 font-medium uppercase tracking-wide text-sm">
                          {achievement.organization}
                        </CardDescription>
                      </div>
                      <CardTitle className="text-lg lg:text-xl font-bold text-foreground leading-tight">
                        {achievement.title}
                      </CardTitle>
                    </div>

                    <CardContent className="p-0 flex-1">
                      <p
                        className="text-foreground leading-relaxed text-sm lg:text-base"
                        dangerouslySetInnerHTML={{
                          __html: achievement.description,
                        }}
                      />
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}