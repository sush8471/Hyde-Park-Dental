import { useState } from "react";
import { FocusCards } from "./focus-cards";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

const teamMembers = [
  {
    title: "Dr Nick Lucas - General & Cosmetic Dentist",
    src: "/team/dr-nick-lucas.jpg",
    name: "Dr. Nicholas Lucas",
    credentials: "BDS (Adelaide), Partner",
    experience: "20+ years at Hyde Park Dental | Partner since 2002",
    specialties: [
      "Cosmetic Dentistry (Crowns, Veneers, Digital Restorations)",
      "CEREC CAD/CAM Technology Pioneer (20+ years experience in SA)",
      "Comprehensive Family Dentistry",
      "Geriatric Dental Care (provides mobile services to local nursing homes)",
    ],
    philosophy:
      "Dr. Nick believes lasting patient relationships are the foundation of exceptional dental care. He combines meticulous attention to detail with genuine compassion, ensuring every patient feels heard and empowered to make informed decisions about their oral health.",
    achievements:
      "Original attendee of the world's first 3D Digital CEREC course, bringing cutting-edge same-day restoration technology to South Australia.",
    personal:
      "Devoted family man with three children. Passionate about the outdoors, cooking, and spending quality time with his family.",
  },
  {
    title: "Dr Dan Mulvihill - Implant & Restorative Specialist",
    src: "/team/dr-dan-mulvihill.jpg",
    name: "Dr. Daniel Mulvihill",
    credentials: "BDS (Adelaide)",
    experience: "Joined Hyde Park Dental in 2013 | Previously practiced in Cairns",
    specialties: [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Orthodontics",
      "Digital Dentistry (CEREC)",
      "Endodontics (Root Canal Therapy)",
    ],
    philosophy:
      "Dr. Dan is committed to incorporating the latest dental technologies and techniques to deliver the highest standard of care. He believes in continuous learning and stays at the forefront of modern dentistry through ongoing professional development.",
    achievements:
      "Active member of the Australian Dental Association and Australian Society of Endodontology.",
    personal:
      "Sports enthusiast who enjoys football, cricket, fishing, and golf. Loves traveling with his wife Ali and spending time with their dog Rupert.",
  },
  {
    title: "Cherry Sandhu - Dental Hygienist",
    src: "/team/dr-sarah-mitchell.jpg",
    name: "Cherry Sandhu",
    credentials: "Dental Hygienist",
    experience: "With Hyde Park Dental since 2009 | Extensive dental care background",
    specialties: [
      "Preventative Dentistry",
      "Professional Teeth Cleaning & Scaling",
      "Periodontal (Gum) Health Management",
      "Patient Education & Oral Health Coaching",
      "Personalized Hygiene Programs",
    ],
    philosophy:
      "Cherry is passionate about empowering patients with the knowledge and tools they need to maintain optimal oral health. Her warm, caring approach helps patients feel comfortable while receiving the preventative care that forms the foundation of a healthy smile.",
    achievements:
      "Active committee member of the Dental Hygienists Association, contributing to the advancement of hygiene standards and practices.",
    personal:
      "Dedicated mother who cherishes time with her husband and daughter. Values strong relationships with family and friends.",
  },
];

export const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedMember(index);
  };

  const member = selectedMember !== null ? teamMembers[selectedMember] : null;

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary">
              Meet Your <span className="gradient-text">Dental Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our experienced, compassionate dentists are dedicated to providing exceptional care and creating beautiful, healthy smiles.
            </p>
            <p className="text-sm text-primary font-medium">
              Click on any team member to learn more
            </p>
          </div>

          {/* Team Cards */}
          <FocusCards cards={teamMembers} onCardClick={handleCardClick} />

          {/* Team Member Dialog */}
          <Dialog open={selectedMember !== null} onOpenChange={(open) => !open && setSelectedMember(null)}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              {member && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-display text-text-primary">
                      {member.name}
                    </DialogTitle>
                    <DialogDescription className="text-base text-primary font-semibold">
                      {member.credentials}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6 pt-4">
                    {/* Experience */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                        Experience
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                    </div>

                    {/* Specialties */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                        Expertise & Specialties
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx}>{specialty}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Philosophy */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                        Philosophy
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.philosophy}</p>
                    </div>

                    {/* Notable Achievement */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                        Notable Achievement
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.achievements}</p>
                    </div>

                    {/* Personal */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                        Personal
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.personal}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-border">
                    <button 
                      className="btn-primary w-full"
                      onClick={() => setSelectedMember(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
