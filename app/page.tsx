import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
