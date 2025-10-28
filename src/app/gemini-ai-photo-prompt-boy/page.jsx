import CommonSection from "@/components/CommonSection/CommonSection";
import { boys } from "../../../public/dummyData";

const BoyPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={boys}
        subTitle="Boy"
        description={
          "Create stunning AI photo prompts with Gemini AI Photo Editor. Explore creative boy portrait ideas, generate realistic AI images, and design professional visual prompts effortlessly."
        }
      />
    </div>
  );
};

export default BoyPromptPage;
