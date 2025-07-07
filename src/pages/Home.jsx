import Categories from "../components/Categories";
import Hero from "../components/Hero";
import FeaturedRecipes from "../components/FeaturedRecipes";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#f7fdf8] min-h-screen w-full overflow-x-hidden">
      <Hero />

      <FeaturedRecipes />

      <Categories />

      <Footer />
    </div>
  );
}
