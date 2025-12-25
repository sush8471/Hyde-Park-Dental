"use client"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react"

function HydeParkFooter() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="relative">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Hyde Park Dental Logo" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <h2 className="mb-3 text-xl font-bold font-display tracking-tight">
              Hyde Park <span className="gradient-text">Dental</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted dental partner since 1983. Delivering exceptional care and beautiful smiles to the Hyde Park community for over 40 years.
            </p>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-display">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#home" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#services" className="block transition-colors hover:text-primary">
                Our Services
              </a>
              <a href="#team" className="block transition-colors hover:text-primary">
                Meet the Team
              </a>
              <a href="#testimonials" className="block transition-colors hover:text-primary">
                Patient Reviews
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold font-display">Contact Us</h3>
            <address className="space-y-3 text-sm not-italic">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>83 King William Road</p>
                  <p>Hyde Park, SA 5061</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:0882724855" className="hover:text-primary transition-colors">
                  08 8272 4855
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:hpdc@hydeparkdental.com.au" className="hover:text-primary transition-colors break-all">
                  hpdc@hydeparkdental.com.au
                </a>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold font-display">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.facebook.com/hydeparkdental83/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.instagram.com/hydeparkdental/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/company/hyde-park-dental/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      asChild
                    >
                      <a 
                        href="https://maps.app.goo.gl/aVq2bdu4GHzbgT1A7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4" />
                        <span className="sr-only">Google Maps</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Find us on Google Maps</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Opening Hours:</strong><br />
              Monday - Friday: 8:00 AM - 5:00 PM<br />
              Saturday: By Appointment
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hyde Park Dental. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm justify-center">
            <a href="#privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#accessibility" className="transition-colors hover:text-primary">
              Accessibility
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { HydeParkFooter }
