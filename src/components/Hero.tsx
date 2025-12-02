import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-artwork.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image with Film Grain */}
      <div className="absolute inset-0 film-grain">
        <img
          src={heroImage}
          alt="Featured Artwork"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-warm-white mb-6 leading-tight">
          Art that Speaks <br />
          <span className="font-medium">in Silence</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-warm-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover handcrafted luxury artwork that transforms spaces and touches souls
        </p>
        <Button
          onClick={scrollToGallery}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-charcoal font-body font-medium px-8 py-6 text-base rounded-full transition-all duration-500 hover:scale-105 hover:shadow-elegant"
        >
          View My Work
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-warm-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
