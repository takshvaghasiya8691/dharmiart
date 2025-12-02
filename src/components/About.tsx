import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-50" />
                <img
                  src={artistPortrait}
                  alt="Dharmi - Artist"
                  className="relative rounded-2xl shadow-elegant w-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-up">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                About the Artist
              </h2>
              <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-foreground/80">
                <p>
                  Every brushstroke tells a story, every texture holds an emotion. I'm Dharmi, 
                  and I create art that speaks to the soul without uttering a single word.
                </p>
                <p>
                  My journey into the world of luxury art began with a simple belief: that beauty 
                  should be felt, not just seen. Each piece I create is handcrafted with intention, 
                  blending contemporary elegance with timeless techniques.
                </p>
                <p>
                  Working primarily with mixed media, gold leaf, and natural textures, I craft 
                  artwork that transforms spaces into sanctuaries. My work has been described as 
                  "poetry in visual form" – a harmonious balance of sophistication and warmth.
                </p>
                <p className="text-foreground font-medium">
                  I believe that art is not just decoration; it's a conversation between the piece 
                  and its beholder, an invitation to pause and feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
