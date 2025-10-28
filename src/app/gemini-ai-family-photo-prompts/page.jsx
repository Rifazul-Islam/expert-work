import { familys } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FamilyPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={familys}
        subTitle="Family"
        description={
          "Create stunning AI photo prompts with Gemini AI Photo Editor. Explore creative Family portrait ideas, generate realistic AI images, and design professional visual prompts effortlessly."
        }
      />
    </div>
  );
};

export default FamilyPromptPage;
