import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Linkedin, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+91 7022886134",
      link: "tel:+917022886134"
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "allenthomas.7504@gmail.com",
      link: "mailto:allenthomas.7504@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/allen319",
      link: "https://linkedin.com/in/allen319"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-success" />,
      label: "WhatsApp",
      value: "Quick Chat",
      link: "https://wa.me/917022886134"
    }
  ];

  const services = [
    "Website Creation",
    "SEO Optimization",
    "Google Ads Management",
    "Meta Ads (Facebook/Instagram)",
    "Content Creation",
    "Photography",
    "Videography",
    "Digital Strategy Consulting",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your digital marketing to the next level? Get in touch and let's discuss how I can help grow your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 Your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, goals, and how I can help you..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    Choose your preferred way to connect with me.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-sm text-muted-foreground">Available for remote work worldwide</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">Response Time</div>
                        <div className="text-sm text-muted-foreground">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-r from-success/10 to-success/5 border-success/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Need Quick Answers?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with me directly on WhatsApp for immediate assistance.
                  </p>
                  <Button variant="success" size="sm" className="w-full">
                    <a href="https://wa.me/917022886134" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;