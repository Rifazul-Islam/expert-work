import { girls } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const GirlPromptPage = () => {
  return (
    <div>
      <CommonSection
        sections={girls}
        subTitle="Girl"
        description={
          "Explore the best Gemini AI photo prompts for girls — easy to copy and paste"
        }
      />
    </div>
  );
};

export default GirlPromptPage;
