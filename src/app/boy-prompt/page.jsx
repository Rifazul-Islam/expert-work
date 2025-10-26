import CommonSection from "@/components/CommonSection/CommonSection";
import { boys } from "../../../public/dummyData";

const BoyPromptPage = () => {
  return (
    <div>
      <CommonSection sections={boys} subTitle="Boy" />
    </div>
  );
};

export default BoyPromptPage;
