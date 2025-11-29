import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}