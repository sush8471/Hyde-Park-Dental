import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BOOKING_URL, PHONE_LINK } from "@/lib/constants"
import { Phone } from "lucide-react"

// Navigation links array for Hyde Park Dental
const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function HydeParkNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background shadow-sm px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-2 md:hidden bg-background border-border shadow-lg">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="block w-full px-3 py-2.5 text-sm font-medium hover:bg-accent rounded-md transition-colors text-foreground"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <div className="h-px my-2 bg-border w-full" />
                  <NavigationMenuItem className="w-full">
                    <a 
                      href={BOOKING_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full px-3 py-2.5 text-sm text-primary font-bold hover:bg-primary hover:text-white rounded-md transition-colors"
                    >
                      Book Appointment
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Main nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Hyde Park Dental Logo" 
                className="h-8 w-auto"
              />
              <span className="inline-block font-display font-bold text-lg">
                Hyde Park <span className="gradient-text">Dental</span>
              </span>
            </a>

            {/* Navigation menu - Desktop */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary px-3 py-2 font-medium text-sm transition-colors"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side - CTAs */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm max-sm:size-9 max-sm:p-0">
            <a href={PHONE_LINK}>
              <Phone className="h-4 w-4 sm:mr-2" />
              <span className="max-sm:sr-only">Call Us</span>
            </a>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span className="max-sm:hidden">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
