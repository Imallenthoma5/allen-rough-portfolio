import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blogs" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Website Creation",
    "SEO Optimization", 
    "Google Ads Management",
    "Meta Ads",
    "Content Creation",
    "Photography",
    "Videography"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/allen319",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Email",
      href: "mailto:allenthomas.7504@gmail.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/917022886134",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      name: "Phone",
      href: "tel:+917022886134",
      icon: <Phone className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Allen Thomas</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Digital Marketing Expert helping businesses grow their online presence through strategic SEO, targeted advertising, and compelling content creation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="bg-background/10 border-background/20 hover:bg-background/20 text-background hover:text-background"
                  asChild
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contact Details</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+917022886134" 
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  +91 7022886134
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:allenthomas.7504@gmail.com" 
                  className="text-background/80 hover:text-primary transition-colors text-sm break-all"
                >
                  allenthomas.7504@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://linkedin.com/in/allen319" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  linkedin.com/in/allen319
                </a>
              </div>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" size="sm" className="bg-success/20 border-success text-success hover:bg-success hover:text-background" asChild>
                <a href="https://wa.me/917022886134" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 Allen Thomas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;