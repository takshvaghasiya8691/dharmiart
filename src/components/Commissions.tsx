import { Button } from "@/components/ui/button";
import { Palette, Sparkles, Home } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Artwork",
    description:
      "Bespoke pieces tailored to your vision, space, and aesthetic. From concept to completion, I'll work closely with you to create something truly unique.",
    price: "Starting at $800",
  },
  {
    icon: Sparkles,
    title: "Art Consultation",
    description:
      "Not sure what you need? I offer personalized consultations to help you discover the perfect artwork for your space, style, and story.",
    price: "Complimentary",
  },
  {
    icon: Home,
    title: "Interior Collections",
    description:
      "Curated series of artworks designed to complement each other perfectly, creating a cohesive aesthetic throughout your home or office.",
    price: "Custom Pricing",
  },
];

const Commissions = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="commissions" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Commissions & Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create something meaningful together. Every commission is a collaboration, 
            every piece a new story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-charcoal" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="font-body text-accent font-semibold text-lg mb-6">
                  {service.price}
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-border hover:border-accent hover:bg-accent/5 transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-charcoal font-body font-medium px-8 py-6 text-base rounded-full transition-all duration-500 hover:scale-105 hover:shadow-elegant"
          >
            Request a Custom Artwork
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Commissions;
