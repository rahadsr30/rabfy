import CTASection from "./discount";
import Hero from "./hero";
import ProductSection from "./products";
import TopPicks from "./topPicks";

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <CTASection />
      <TopPicks />
    </main>
  );
}
