import Footer from "@/components/ui/footer";
import CTASection from "./discount";
import Hero from "./hero";
import Products from "./products";
import TopPicks from "./topPicks";

export default function Page() {
  return (
    <main>
      <Hero />
      <Products />
      <CTASection />
      <TopPicks />
      <Footer />
    </main>
  );
}
