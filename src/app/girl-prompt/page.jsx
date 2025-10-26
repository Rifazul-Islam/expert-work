import { girls } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const GirlPromptPage = () => {
  return (
    <div>
      <CommonSection sections={girls} subTitle="Girl" />
    </div>
  );
};

export default GirlPromptPage;
