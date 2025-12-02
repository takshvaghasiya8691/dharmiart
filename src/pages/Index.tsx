import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Commissions from "@/components/Commissions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <About />
        <Commissions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
