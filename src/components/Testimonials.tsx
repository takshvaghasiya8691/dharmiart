import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Interior Designer",
    quote:
      "Dharmi's artwork transformed my client's living room into a gallery-worthy space. The attention to detail and quality is unmatched.",
  },
  {
    name: "James Chen",
    role: "Art Collector",
    quote:
      "I've collected art for over 20 years, and Dharmi's pieces hold a special place in my collection. They're timeless and deeply moving.",
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    quote:
      "The custom piece Dharmi created for our home perfectly captured our story. It's not just art; it's part of our family now.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Kind Words
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            What collectors and clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent mb-6" />
              <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-accent/20 pt-6">
                <p className="font-serif text-lg font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
