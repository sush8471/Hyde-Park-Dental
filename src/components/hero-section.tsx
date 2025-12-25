import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Phone, Calendar, MapPin } from 'lucide-react'
import { useScroll, motion } from 'motion/react'




export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
                    {/* Full viewport hero image - No borders */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="/clinic-hero.jpg"
                            alt="Hyde Park Dental clinic exterior - modern brick building with welcoming entrance"
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Enhanced gradient overlay for excellent text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 lg:from-black/90 lg:via-black/65 lg:to-black/35" />
                    </div>

                    {/* Content positioned on left with proper spacing from navbar */}
                    <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[650px] lg:min-h-[700px] pt-24 pb-16 lg:pt-32 lg:pb-20">
                        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-24">
                            <div className="max-w-2xl lg:max-w-3xl">
                                {/* Trust Badge - Clean text with border */}
                                <div className="inline-block border-2 border-primary/40 px-4 py-1.5 rounded-full mb-4">
                                    <span className="text-xs md:text-sm font-semibold text-primary">Serving Adelaide Since 1983</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-5 leading-[1.1]">
                                    Your Confident Smile <span className="text-primary">Starts Here</span>
                                </h1>
                                <p className="text-base md:text-lg lg:text-xl text-white/95 mb-10 leading-relaxed max-w-2xl">
                                    Over 40 years serving Adelaide families with expert dental care, advanced technology, and a warm, welcoming approach.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="h-12 rounded-full pl-6 pr-4 text-sm md:text-base bg-accent hover:bg-accent-dark shadow-2xl hover:shadow-accent/50 transition-all duration-300">
                                        <span className="text-nowrap font-semibold">Book Your Appointment</span>
                                        <ChevronRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-12 rounded-full px-6 text-sm md:text-base border-2 border-white text-white hover:bg-white hover:text-primary bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300">
                                        <Phone className="mr-2 h-4 w-4" />
                                        <span className="text-nowrap font-semibold">(08) 8272 4855</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.replace('#', ''))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMenuState(false)
        }
    }

    const handleCall = () => {
        window.location.href = 'tel:0882724855'
    }

    const handleBooking = () => {
        console.log('Booking clicked')
        alert('Booking system integration here')
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="Hyde Park Dental"
                                className="flex items-center">
                                <img 
                                    src="/logo.png" 
                                    alt="Hyde Park Dental Logo" 
                                    className="h-12 md:h-14 lg:h-16 w-auto"
                                />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollToSection(item.href)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleCall}
                                    className="rounded-full">
                                    <Phone className="mr-2 h-3 w-3" />
                                    <span>Call Us</span>
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => scrollToSection('#contact')}
                                    className="rounded-full bg-primary hover:bg-primary-dark">
                                    <MapPin className="mr-2 h-3 w-3" />
                                    <span>Visit Us</span>
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={handleBooking}
                                    className="rounded-full bg-accent hover:bg-accent-dark">
                                    <Calendar className="mr-2 h-3 w-3" />
                                    <span>Book Now</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
