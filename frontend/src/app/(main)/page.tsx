import { HeroCarousel } from "@/components/module/home/HeroSection";
import { ProductsSection } from "@/components/module/home/ProductsSection";
import { ToolsSection } from "@/components/module/home/ToolsSection";
import { WelcomeSection } from "@/components/module/home/WelcomeSection";

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <WelcomeSection />
      <ProductsSection />
      <ToolsSection />
    </>
  );
}

export default HomePage;
