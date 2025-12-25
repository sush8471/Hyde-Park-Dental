import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BOOKING_URL } from "@/lib/constants";

function DentalFAQ() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Card Container with Shadow and Border - Matching Contact Form */}
          <div className="bg-background border-border relative shadow-xl rounded-2xl overflow-hidden p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-primary mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our dental services, appointments, and payment options.
              </p>
            </div>

            {/* FAQ Dialog Trigger */}
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    View All FAQs
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-2xl [&>button:last-child]:hidden">
                  <div className="overflow-y-auto">
                    <DialogHeader className="contents space-y-0 text-left">
                      <DialogTitle className="px-6 pt-6 text-xl font-display">
                        Frequently Asked Questions
                      </DialogTitle>
                      <DialogDescription asChild>
                        <div className="p-6">
                          <div className="space-y-6 [&_strong]:font-semibold [&_strong]:text-foreground">
                            {/* FAQ 1: Payment Options */}
                            <div className="space-y-2">
                              <p>
                                <strong className="text-lg">Payment Options</strong>
                              </p>
                              <p className="leading-relaxed">
                                We accept all major health insurance with HICAPS on-the-spot processing, 
                                so you'll know your gap payment immediately. For treatments over $400, 
                                we offer flexible payment plans including our in-house plan (50% upfront, 
                                balance over 3-4 months) and the National Dental Plan with no interest. 
                                We also bulk bill eligible children under the Medicare Child Dental Benefits Scheme.
                              </p>
                            </div>

                            {/* FAQ 2: Child's First Visit */}
                            <div className="space-y-2">
                              <p>
                                <strong className="text-lg">At what age should I bring my child to the dentist?</strong>
                              </p>
                              <p className="leading-relaxed">
                                We recommend your child's first visit around 12 months of age, or when 
                                their first tooth appears. Early visits help build positive associations 
                                with the dentist. We make it fun with take-home packs including toothbrushes, 
                                stickers, and a Wiggles brushing kit!
                              </p>
                            </div>

                            {/* FAQ 3: First Visit */}
                            <div className="space-y-2">
                              <p>
                                <strong className="text-lg">What will my first visit involve?</strong>
                              </p>
                              <p className="leading-relaxed">
                                Your initial 60-minute consultation includes a comprehensive oral examination, 
                                digital x-rays, photos, and charting. We'll discuss any concerns you have 
                                and create a personalized treatment plan with clear pricing and health fund 
                                estimates. No surprises—you'll know exactly what to expect before proceeding.
                              </p>
                            </div>

                            {/* FAQ 4: Dental Hygienist */}
                            <div className="space-y-2">
                              <p>
                                <strong className="text-lg">Why see a dental Hygienist?</strong>
                              </p>
                              <p className="leading-relaxed">
                                Our dental hygienists provide professional teeth cleaning, remove plaque 
                                and tartar buildup, and help prevent gum disease. They'll give you 
                                personalized oral care advice and work with your dentist to maintain 
                                optimal oral health. Regular hygiene visits are essential for preventing 
                                dental problems at any age.
                              </p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                  <DialogFooter className="border-t border-border px-6 py-4">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                    <Button type="button" asChild>
                      <a 
                        href={BOOKING_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Book Appointment
                      </a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DentalFAQ };
