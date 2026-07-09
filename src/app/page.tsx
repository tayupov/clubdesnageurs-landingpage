import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection
        eyebrow="Fresh · Woody · Green"
        title="Earth"
        href="/earth"
        className="bg-gradient-to-br from-emerald-200 via-lime-100 to-stone-300"
      />
      <ProductSection
        eyebrow="Fruity · Sweet · Fresh"
        title="Passionfruit"
        href="/passionfruit"
        className="bg-gradient-to-br from-orange-200 via-rose-100 to-yellow-100"
      />
    </>
  );
}
