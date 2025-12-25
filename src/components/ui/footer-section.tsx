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
      <div className="container mx-auto px-4 py-8 md:py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-3">
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
              <a href="#services" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="#team" className="block transition-colors hover:text-primary">
                Our Team
              </a>
              <a href="#testimonials" className="block transition-colors hover:text-primary">
                Reviews
              </a>
              <a href="#contact" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
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
        <div className="mt-8 md:mt-12 flex flex-col items-center justify-center border-t pt-6 md:pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Hyde Park Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { HydeParkFooter }
