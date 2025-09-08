import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Building Digital{" "}
                <span className="text-primary">Growth</span> with{" "}
                <span className="text-success">SEO</span>, Ads, and Content Creation
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Professional digital marketing services by{" "}
                <span className="font-semibold text-primary">Allen Thomas</span> - 
                Your partner in driving online success through strategic SEO, targeted advertising, and compelling content.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>SEO Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Google Ads Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Content Creator</span>
              </div>
            </div>
          </div>

          <div className="lg:order-last">
            <div className="relative">
              <img src={heroImage} alt="Digital marketing workspace showcasing SEO analytics and growth strategies" className="w-full h-auto rounded-2xl shadow-large" />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-medium">
                <div className="text-2xl font-bold">Serving 2 Businesses and Multiple Projects</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-4 rounded-lg shadow-medium">
                <div className="text-2xl font-bold">Guaranteed</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;