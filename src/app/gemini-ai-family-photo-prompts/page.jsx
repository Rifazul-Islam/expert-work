import { familys } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FamilyPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={familys}
        subTitle="Family"
        description={
          "Discover the best Gemini AI family photo prompts — ready to copy and paste."
        }
      />
    </div>
  );
};

export default FamilyPromptPage;
