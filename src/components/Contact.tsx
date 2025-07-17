"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Save the form reference
    setIsLoading(true);

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you soon.",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
      });

      form.reset(); // Use the saved reference
    } catch (error) {
      toast.error("Error sending message", {
        description: "Something went wrong. Please try again.",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      username: "Deepz1403",
      image: "/Images/Contact/Github.png",
      url: "https://github.com/Deepz1403",
    },
    {
      name: "Email",
      username: "dbgavali1403@gmail.com",
      image: "/Images/Contact/Email.png",
      url: "mailto:dbgavali1403@gmail.com",
    },
    {
      name: "LinkedIn",
      username: "deepeshgavali",
      image: "/Images/Contact/LinkedIn.png",
      url: "https://www.linkedin.com/in/deepeshgavali",
    },
    {
      name: "LeetCode",
      username: "Deepz143",
      image: "/Images/Contact/Leetcode.png",
      url: "https://leetcode.com/u/Deepz143/",
    },
    {
      name: "Twitter",
      username: "Deepesh_Gavali",
      image: "/Images/Contact/Twitter.png",
      url: "https://x.com/Deepesh_Gavali",
    },
  ];

  return (
    <div id="contact" className="w-full px-[12%] py-12 scroll-mt-20">
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-muted-foreground mb-2">
          Connect with me
        </h4>
        <h2 className="text-4xl md:text-5xl font-ovo">Get in Touch</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Let&apos;s Work Together
                </CardTitle>
                <CardDescription className="text-foreground text-sm lg:text-base">
                  I&apos;m actively seeking new opportunities. Feel free to
                  reach out if you have an exciting project or role in mind.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>dbgavali1403@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>+91 7666445228</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Pune, Maharashtra, India</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="gap-y-2">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl mb-1">Send Me A Message</CardTitle>
              <CardDescription className="text-foreground text-sm lg:text-base">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Portfolio Contact Form"
                />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-ovo mb-10">Find Me On</h3>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={social.image}
                    alt={`${social.name} icon`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <div className="font-medium text-sm">{social.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {social.username}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
