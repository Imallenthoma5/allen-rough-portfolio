import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "SEO Optimization",
    "Google Ads",
    "Meta Ads",
    "Content Marketing",
    "Website Development",
    "Photography",
    "Videography",
    "Brand Strategy"
  ];

  const achievements = [
    { number: "5+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Retention" },
    { number: "200%", label: "Average ROI Increase" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Allen Thomas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Digital Marketing Expert & Creative Specialist helping businesses grow their online presence through strategic marketing and compelling content.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate digital marketer with over 5 years of experience in helping businesses achieve remarkable online growth. My expertise spans across SEO optimization, paid advertising, content creation, and visual storytelling through photography and videography.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart is my holistic approach to digital marketing - combining technical SEO knowledge with creative content strategies to deliver measurable results for my clients.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="default" size="lg">
                  <a href="https://linkedin.com/in/allen319" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.label} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;