import Banner from "@/components/Banner/Banner";
import HomeSection from "@/components/HomeSection/HomeSection";
import SliderComponent from "@/components/SliderComponent/SliderComponent";

export default function Home() {
  return (
    <div className="mx-2 bg-gray-100">
      <Banner />
      <SliderComponent />
      <HomeSection />
    </div>
  );
}
