import { festivals } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FestivalPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={festivals}
        subTitle="Festival"
        description={
          "Create stunning AI photo prompts with Gemini AI Photo Editor. Explore creative festival portrait ideas, generate realistic AI images, and design professional visual prompts effortlessly."
        }
      />
    </div>
  );
};

export default FestivalPromptPage;
