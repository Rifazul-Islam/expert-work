import { girls } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const GirlPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={girls}
        subTitle="Girl"
        description={
          "Create stunning AI photo prompts with Gemini AI Photo Editor. Explore creative Girl portrait ideas, generate realistic AI images, and design professional visual prompts effortlessly."
        }
      />
    </div>
  );
};

export default GirlPromptPage;
