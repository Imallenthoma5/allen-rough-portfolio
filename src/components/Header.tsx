import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About Me"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#blogs",
    label: "Blogs"
  }, {
    href: "#faqs",
    label: "FAQs"
  }, {
    href: "#contact",
    label: "Contact Me"
  }];
  return <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Allen Thomas</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map(link => <li key={link.href}>
                  <a href={link.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </nav>

          <div className="hidden md:block">
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navLinks.map(link => <a key={link.href} href={link.href} className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>)}
              <div className="pt-2">
                <Button variant="default" size="sm" className="w-full">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;