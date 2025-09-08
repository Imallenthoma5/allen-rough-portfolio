import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MousePointer, 
  Globe, 
  PenTool, 
  Camera, 
  Video,
  TrendingUp,
  Target
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Website Creation",
      description: "Professional, responsive websites that convert visitors into customers with modern design and optimal user experience.",
      benefits: ["Mobile-first design", "SEO-optimized structure", "Fast loading speeds", "Conversion optimization"],
      featured: false
    },
    {
      icon: <Search className="w-8 h-8 text-success" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your business.",
      benefits: ["Keyword research", "On-page optimization", "Technical SEO", "Local SEO"],
      featured: true
    },
    {
      icon: <MousePointer className="w-8 h-8 text-primary" />,
      title: "Google Ads Management",
      description: "Strategic Google Ads campaigns that maximize ROI and drive qualified leads to your business.",
      benefits: ["Campaign setup", "Keyword optimization", "Ad copy creation", "Performance tracking"],
      featured: false
    },
    {
      icon: <Target className="w-8 h-8 text-success" />,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Targeted social media advertising campaigns to reach your ideal customers on Facebook and Instagram.",
      benefits: ["Audience targeting", "Creative design", "A/B testing", "Campaign optimization"],
      featured: false
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Content Creation",
      description: "Engaging blog posts, copywriting, and branding content that resonates with your target audience.",
      benefits: ["Blog writing", "Website copy", "Social media content", "Brand messaging"],
      featured: true
    },
    {
      icon: <Camera className="w-8 h-8 text-success" />,
      title: "Photography",
      description: "Professional product and business photography to showcase your brand in the best light.",
      benefits: ["Product photography", "Business portraits", "Brand imagery", "Social media photos"],
      featured: false
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Videography",
      description: "Compelling business reels and marketing videos that tell your brand story and engage your audience.",
      benefits: ["Business reels", "Marketing videos", "Social media content", "Brand storytelling"],
      featured: false
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-success" />,
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital marketing strategy development to align all your marketing efforts for maximum impact.",
      benefits: ["Strategy development", "Market analysis", "Competitor research", "Growth planning"],
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to grow your business and establish a strong online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`relative h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.featured ? 'border-primary shadow-medium' : ''
              }`}
            >
              {service.featured && (
                <Badge className="absolute -top-2 right-4 bg-success text-success-foreground">
                  Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={service.featured ? "default" : "outline"} 
                    size="sm" 
                    className="w-full mt-4"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="hero" size="lg">
            Contact Allen for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;