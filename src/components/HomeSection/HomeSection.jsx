import {
  boys,
  couples,
  familys,
  festivals,
  girls,
} from "../../../public/dummyData";

import InsitePage from "../InsitePage/InsitePage";
const HomeSection = () => {
  return (
    <div>
      {/* Section Boy */}
      <div>
        <InsitePage
          sections={boys}
          subTitle={"Boy"}
          link={"/gemini-ai-photo-prompt-boy"}
          btnText={"All Boy Prompt"}
        />
      </div>

      {/* Section Girl  */}
      <div>
        <InsitePage
          sections={girls}
          subTitle={"Girl"}
          link={"/gemini-ai-photo-prompt-girl"}
          btnText={"All Girl Prompt"}
        />
      </div>

      {/* Section Couple */}

      <div>
        <InsitePage
          sections={couples}
          subTitle={"Couple"}
          link={"/prompt-for-gemini-ai-couple-photo"}
          btnText={"All Couple Prompt"}
        />
      </div>

      {/* Section Family */}

      <div>
        <InsitePage
          sections={familys}
          subTitle={"Family"}
          link={"/gemini-ai-family-photo-prompts"}
          btnText={"All Family Prompt"}
        />
      </div>
      {/* Section Festival */}
      <div>
        <InsitePage
          sections={festivals}
          subTitle={"Festival"}
          link={"/gemini-ai-photo-prompt-festival"}
          btnText={"All Festival Prompt"}
        />
      </div>
    </div>
  );
};

export default HomeSection;
