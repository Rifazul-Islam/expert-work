import CommonSection from "@/components/CommonSection/CommonSection";
import { couples } from "../../../public/dummyData";
const CouplePromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={couples}
        subTitle="Couple"
        description={
          "Find the best Gemini AI couple photo prompts — ready to copy and paste."
        }
      />
    </div>
  );
};

export default CouplePromptPage;
