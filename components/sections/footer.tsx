import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Dev</span>
              <span className="text-blue-500">Portfolio</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:hello@devportfolio.com" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  hello@devportfolio.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-muted-foreground">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">
              Have a project in mind? Get in touch and let's create something amazing together.
            </p>
            <Button>Get in Touch</Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}