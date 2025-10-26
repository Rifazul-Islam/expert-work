import { festivals } from "../../../public/dummyData";
import CommonSection from "@/components/CommonSection/CommonSection";

const FestivalPromptPage = () => {
  return (
    <div>
      <CommonSection sections={festivals} subTitle="Festival" />
    </div>
  );
};

export default FestivalPromptPage;
