import Banner from "@/components/Banner/Banner";
import BoyPromptPage from "./boy-prompt/page";
import GirlPromptPage from "./girl-prompt/page";
import CouplePromptPage from "./couple-prompt/page";
import FamilyPromptPage from "./family-prompt/page";
import FestivalPromptPage from "./festival-prompt/page";

export default function Home() {
  return (
    <div className="mx-2 bg-gray-100">
      <Banner />
      <BoyPromptPage />

      <GirlPromptPage />

      <CouplePromptPage />

      <FamilyPromptPage />
      <FestivalPromptPage />
    </div>
  );
}
