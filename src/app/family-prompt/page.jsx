import { familys } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FamilyPromptPage = () => {
  return (
    <div>
      <CommonSection sections={familys} subTitle="Family" />
    </div>
  );
};

export default FamilyPromptPage;
