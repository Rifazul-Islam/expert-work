import { festivals } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FestivalPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={festivals}
        subTitle="Festival"
        description={
          "Explore the best Gemini AI festival photo prompts — ready to copy and paste."
        }
      />
    </div>
  );
};

export default FestivalPromptPage;
