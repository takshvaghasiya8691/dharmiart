import { Instagram, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Dharmi Art" className="h-16 w-auto mb-4" />
            <p className="font-body text-sm text-warm-white/70 leading-relaxed">
              Handcrafted luxury artwork that speaks to the soul. Each piece is created 
              with intention and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              {["Gallery", "About", "Commissions", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-warm-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/dharmi_.art"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-warm-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-warm-white group-hover:text-charcoal" />
              </a>
              <a
                href="mailto:contact@dharmiart.com"
                className="w-10 h-10 rounded-full bg-warm-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 text-warm-white group-hover:text-charcoal" />
              </a>
            </div>
            <p className="font-body text-sm text-warm-white/70">
              contact@dharmiart.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-warm-white/50">
            © {currentYear} Dharmi Art. All rights reserved.
          </p>
          <p className="font-body text-sm text-warm-white/50 flex items-center gap-2">
            Handcrafted with <Heart className="w-4 h-4 text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
