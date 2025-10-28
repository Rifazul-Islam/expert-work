import CommonSection from "@/components/CommonSection/CommonSection";
import { boys } from "../../../public/dummyData";

const BoyPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={boys}
        subTitle="Boy"
        description={
          "Discover the best Gemini AI photo prompts for boys — ready to copy and paste."
        }
      />
    </div>
  );
};

export default BoyPromptPage;
