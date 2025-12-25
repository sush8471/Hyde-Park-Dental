import { Compare } from "./before-after-compare";

const dentalCases = [
  {
    id: 1,
    title: "Porcelain Veneers",
    description: "Complete smile transformation with custom veneers",
    doctor: "Dr Nick Lucas",
    beforeImage: "/before-after/case1-before.png",
    afterImage: "/before-after/case1-after.png",
  },
  {
    id: 2,
    title: "Dental Implants",
    description: "Full arch restoration with dental implants",
    doctor: "Dr Dan Mulvihill",
    beforeImage: "/before-after/case2-before.png",
    afterImage: "/before-after/case2-after.png",
  },
  {
    id: 3,
    title: "Smile Alignment",
    description: "Orthodontic correction and cosmetic enhancement",
    doctor: "Dr Dan Mulvihill",
    beforeImage: "/before-after/case3-before.png",
    afterImage: "/before-after/case3-after.png",
  },
  {
    id: 4,
    title: "Cosmetic Dentistry",
    description: "Complete smile makeover with whitening and bonding",
    doctor: "Dr Dan Mulvihill",
    beforeImage: "/before-after/case4-before.png",
    afterImage: "/before-after/case4-after.png",
  },
];

export const BeforeAfterGallery = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See the remarkable transformations achieved by our experienced team at Hyde Park Dental.
            </p>
            <p className="text-sm text-primary font-semibold">
              Drag the slider to compare before and after
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {dentalCases.map((case_) => (
              <div
                key={case_.id}
                className="group p-6 lg:p-8 border rounded-3xl bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-6">
                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-foreground">
                      {case_.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {case_.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      By {case_.doctor}
                    </p>
                  </div>

                  {/* Compare Component */}
                  <Compare
                    firstImage={case_.afterImage}
                    secondImage={case_.beforeImage}
                    firstImageClassName="object-cover object-center"
                    secondImageClassname="object-cover object-center"
                    className="h-[300px] w-full md:h-[350px] lg:h-[400px] rounded-2xl"
                    slideMode="drag"
                    initialSliderPercentage={50}
                  />

                  {/* Before/After Labels */}
                  <div className="flex justify-between text-sm font-medium pt-2">
                    <span className="text-muted-foreground">← Before</span>
                    <span className="text-primary">After →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
