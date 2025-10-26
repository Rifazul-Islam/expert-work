import CommonSection from "@/components/CommonSection/CommonSection";
import { couples } from "../../../public/dummyData";
const CouplePromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={couples}
        subTitle="Couple"
        description={
          "Create stunning AI photo prompts with Gemini AI Photo Editor. Explore creative Couple portrait ideas, generate realistic AI images, and design professional visual prompts effortlessly."
        }
      />
    </div>
  );
};

export default CouplePromptPage;
