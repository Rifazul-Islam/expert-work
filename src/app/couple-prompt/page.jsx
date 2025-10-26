import CommonSection from "@/components/CommonSection/CommonSection";
import { couples } from "../../../public/dummyData";
const CouplePromptPage = () => {
  return (
    <div>
      <CommonSection sections={couples} subTitle="Couple" />
    </div>
  );
};

export default CouplePromptPage;
