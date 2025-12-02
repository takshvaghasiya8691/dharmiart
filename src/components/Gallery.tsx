import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const artworks = [
  {
    id: 1,
    image: gallery1,
    title: "Golden Dreams",
    medium: "Mixed Media on Canvas",
  },
  {
    id: 2,
    image: gallery2,
    title: "Botanical Whispers",
    medium: "Acrylic & Gold Leaf",
  },
  {
    id: 3,
    image: gallery3,
    title: "Flowing Grace",
    medium: "Oil & Texture",
  },
  {
    id: 4,
    image: gallery4,
    title: "Warm Embrace",
    medium: "Mixed Media",
  },
  {
    id: 5,
    image: gallery5,
    title: "Geometric Harmony",
    medium: "Acrylic on Canvas",
  },
  {
    id: 6,
    image: gallery6,
    title: "Abstract Serenity",
    medium: "Oil & Mixed Media",
  },
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is thoughtfully crafted to bring warmth and elegance to your space
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="break-inside-avoid group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft transition-all duration-500 hover:shadow-lifted hover:scale-[1.02]">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-warm-white">
                    <h3 className="font-serif text-xl font-medium mb-1">{artwork.title}</h3>
                    <p className="font-body text-sm text-warm-white/80">{artwork.medium}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white hover:text-accent transition-colors duration-300"
            onClick={() => setSelectedArtwork(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            <div className="text-center mt-6 text-warm-white">
              <h3 className="font-serif text-2xl font-medium mb-2">{selectedArtwork.title}</h3>
              <p className="font-body text-warm-white/80">{selectedArtwork.medium}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
