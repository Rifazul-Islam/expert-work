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
          link={"/boy-prompt"}
          btnText={"All Boy Prompt"}
        />
      </div>

      {/* Section Girl  */}
      <div>
        <InsitePage
          sections={girls}
          subTitle={"Girl"}
          link={"/girl-prompt"}
          btnText={"All Girl Prompt"}
        />
      </div>

      {/* Section Couple */}

      <div>
        <InsitePage
          sections={couples}
          subTitle={"Couple"}
          link={"/couple-prompt"}
          btnText={"All Couple Prompt"}
        />
      </div>

      {/* Section Family */}

      <div>
        <InsitePage
          sections={familys}
          subTitle={"Family"}
          link={"/family-prompt"}
          btnText={"All Family Prompt"}
        />
      </div>
      {/* Section Festival */}
      <div>
        <InsitePage
          sections={festivals}
          subTitle={"Festival"}
          link={"/festival-prompt"}
          btnText={"All Festival Prompt"}
        />
      </div>
    </div>
  );
};

export default HomeSection;
