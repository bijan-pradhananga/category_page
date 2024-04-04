
import Banner from "./components/BannerComponents/Banner";
import CategoryPage from "./components/categoryComponents/CategoryPage";

export default function Home() {
  return (
    <>
    <div className="w-full md:container md:mx-auto">
        <Banner/>
        <CategoryPage/>
    </div>
    </>
  );
}
