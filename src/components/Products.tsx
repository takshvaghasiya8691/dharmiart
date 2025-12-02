import { useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    image: product1,
    title: "Love Story Keepsake Plate",
    description: "Personalized resin plate with couple photos and milestone dates",
    category: "Custom Keepsakes",
    price: "₹1,200",
  },
  {
    id: 2,
    image: product2,
    title: "Festive Diya Holder - Turquoise",
    description: "Handcrafted resin tray with gold accents and floral details",
    category: "Diya Holders",
    price: "₹850",
  },
  {
    id: 3,
    image: product3,
    title: "Ganesh Diya Holder - Emerald",
    description: "Elegant green resin piece with sacred Ganesh motif",
    category: "Diya Holders",
    price: "₹900",
  },
  {
    id: 4,
    image: product4,
    title: "Ocean Blue Decorative Tray",
    description: "Stunning blue resin with gold flowers and pearl accents",
    category: "Decorative Trays",
    price: "₹750",
  },
  {
    id: 5,
    image: product5,
    title: "Sanskrit Mantra Diya Holder",
    description: "Blue resin with traditional Sanskrit text and gold diyas",
    category: "Diya Holders",
    price: "₹950",
  },
  {
    id: 6,
    image: product6,
    title: "Rainbow Collection Set",
    description: "Vibrant multi-colored diya holders with gold leaf details",
    category: "Sets",
    price: "₹3,200",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Resin Art Collection
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted resin pieces that blend tradition with modern elegance. 
            Each piece is thoughtfully created with love and attention to detail.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02]">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <ShoppingBag className="w-8 h-8 text-warm-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-accent uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-2xl font-semibold text-accent">
                      {product.price}
                    </span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-accent hover:bg-accent/5 transition-colors duration-300"
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-charcoal font-body font-medium px-8 py-6 text-base rounded-full transition-all duration-500 hover:scale-105 hover:shadow-elegant"
          >
            Order Custom Resin Art
          </Button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white hover:text-accent transition-colors duration-300"
            onClick={() => setSelectedProduct(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="font-body text-sm text-accent uppercase tracking-wider mb-3">
                  {selectedProduct.category}
                </p>
                <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                  {selectedProduct.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                <div className="mb-8">
                  <span className="font-body text-4xl font-semibold text-accent">
                    {selectedProduct.price}
                  </span>
                </div>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-charcoal font-body font-medium rounded-full transition-all duration-300 hover:shadow-elegant"
                >
                  Inquire About This Piece
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
