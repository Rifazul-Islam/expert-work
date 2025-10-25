import Banner from "@/components/Banner/Banner";
import BoyPromptPage from "./boy-prompt/page";
import GirlPromptPage from "./girl-prompt/page";

export default function Home() {
  return (
    <div className="mx-2 bg-gray-100">
      <Banner />
      <BoyPromptPage />

      <GirlPromptPage />
    </div>
  );
}
