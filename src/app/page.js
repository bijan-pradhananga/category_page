
import CategoryHeader from "./components/categoryComponents/CategoryHeader";
import CategoryBody from "./components/categoryComponents/CategoryBody";
import Banner from "./components/BannerComponents/Banner";

export default function Home() {
  return (
    <>
    <div className="w-full md:container md:mx-auto">
        <Banner/>
        <CategoryHeader/>
        <CategoryBody/>
    </div>
    </>
  );
}
