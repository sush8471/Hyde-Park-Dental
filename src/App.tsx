import { HeroSection2 } from './components/ui/hero-section-2'
import { FeatureWithAdvantages } from './components/ui/feature-with-advantages'
import { ServicesGallery } from './components/ui/services-gallery'
import { DentalFAQ } from './components/ui/dental-faq'
import { HydeParkTestimonials } from './components/ui/testimonial-card'
import { BeforeAfterGallery } from './components/ui/before-after-gallery'
import { TeamSection } from './components/ui/team-section'
import { HydeParkFooter } from './components/ui/footer-section'
import { HydeParkNavbar } from './components/ui/hyde-park-navbar'
import { useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Shield,
  Zap,
  Smile,
  Stethoscope,
  Baby,
  Phone,
  MapPin,
  Clock,
  Users,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react'

// Animated Section Component
const AnimatedSection = ({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0)


  // Testimonials data
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Hyde Park Dental completely transformed my smile! The team made me feel so comfortable, and the CEREC same-day crown was incredible. No more temporary crowns!"
    },
    {
      name: "James K.",
      rating: 5,
      text: "I've been bringing my family here for years. The children's dentistry approach is fantastic - my kids actually enjoy going to the dentist now!"
    },
    {
      name: "Michelle T.",
      rating: 5,
      text: "Professional, caring, and state-of-the-art technology. My dental implants look and feel completely natural. Couldn't be happier with the results."
    },
    {
      name: "David R.",
      rating: 5,
      text: "After 40 years of service, they know what they're doing. The Invisalign treatment was seamless and the staff were incredibly supportive throughout."
    }
  ]

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Principal Dentist",
      specialty: "Cosmetic & Implant Dentistry",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. James Chen",
      role: "General & Family Dentist",
      specialty: "CEREC & Restorative Care",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Orthodontist",
      specialty: "Invisalign & Smile Fast",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    }
  ]

  // Before/After gallery images (placeholders)
  const beforeAfterImages = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1609840114035-3c981960afb8?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop"
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBooking = () => {
    console.log('Booking appointment clicked')
    alert('Booking system would open here. In production, this would integrate with your booking platform.')
  }

  const handleCall = () => {
    window.location.href = 'tel:0882724855'
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation Bar */}
      <HydeParkNavbar />

      {/* New Hero Section with Animated Clip Path */}
      <section id="home">
        <HeroSection2
          logo={{
            url: "/logo.png",
            alt: "Hyde Park Dental Logo",
          }}
          slogan="SERVING ADELAIDE SINCE 1983"
          title={
            <>
              Your Confident Smile <br />
              <span className="text-primary">Starts Here</span>
            </>
          }
          subtitle="Over 40 years serving Adelaide families with expert dental care, advanced technology, and a warm, welcoming approach. Experience the Hyde Park difference."
          backgroundImage="/team-hero.jpg"
          contactInfo={{
            website: "hydeparkdental.vercel.app",
            phone: "(08) 8272 4855",
            address: "84a King William Rd, Goodwood SA",
          }}
        />
      </section>

      {/* Feature Section */}
      <FeatureWithAdvantages />

      {/* Services Gallery Section */}
      <section id="services">
        <ServicesGallery />
      </section>

      {/* Before and After Gallery */}
      <BeforeAfterGallery />

      {/* FAQ Section */}
      <DentalFAQ />

      {/* Testimonials Section */}
      <section id="testimonials">
        <HydeParkTestimonials />
      </section>

      {/* Meet the Team Section */}
      <section id="team">
        <TeamSection />
      </section>

      {/* Footer */}
      <section id="contact">
        <HydeParkFooter />
      </section>
    </div>
  )
}

export default App
