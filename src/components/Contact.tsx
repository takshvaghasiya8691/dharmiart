import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Let's Create Together
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              I'd love to hear from you. Let's create something meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-sm font-medium text-foreground mb-2 block"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-accent transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-sm font-medium text-foreground mb-2 block"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border focus:border-accent transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-foreground mb-2 block"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background border-border focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-charcoal font-body font-medium py-6 text-base rounded-full transition-all duration-500 hover:scale-105 hover:shadow-elegant"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:contact@dharmiart.com"
                        className="font-body text-foreground hover:text-accent transition-colors duration-300"
                      >
                        contact@dharmiart.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="font-body text-foreground hover:text-accent transition-colors duration-300"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-5 h-5 text-charcoal" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com/dharmi_.art"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-foreground hover:text-accent transition-colors duration-300"
                      >
                        @dharmi_.art
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                    "Every conversation is the beginning of something beautiful. 
                    I typically respond within 24 hours."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
