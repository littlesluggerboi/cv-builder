import Text from "../Texts/Text";
import stateGenerator from "../utility/stateGenerator";
import Section from "./Section";
import expImg from "../../public/icons/briefcase-account-outline.svg";
import educationImg from "../../public/icons/school.svg";
import GroupTimeLine from "./GroupTimeline";
export default function Focal() {
  const [name, setName] = stateGenerator();
  const [jobTitle, setJobTitle] = stateGenerator();

  return (
    <>
      <div className="focal">
        <div className="header">
          <Text
            placeholder={"Full Name"}
            styleClass={"big-text bold"}
            value={name}
            callback={setName}
          />
          <Text
            placeholder={"Job Title"}
            styleClass={"small-text"}
            value={jobTitle}
            callback={setJobTitle}
          />
        </div>

        <hr />

        <Section
          srcImg={expImg}
          sectionTitle={"Experience"}
          sectionContentStyle="flex small-gap column"
          sectionContent={
            <GroupTimeLine
              h2placeholder={"(2021-2023)"}
              h3placeholder={"Job Position"}
              pplaceholder={"Company Name"}
              addValue={"Add responsibilities"}
              addBtn="Add Experience Section"
            />
          }
        />

        <hr />
        <Section
          srcImg={educationImg}
          sectionTitle={"Education"}
          sectionContentStyle="flex small-gap column"
          sectionContent={
            <GroupTimeLine
              h2placeholder={"2021-2023"}
              h3placeholder={"School Name"}
              pplaceholder={"Degree"}
              addValue={"Add notable achievements"}
              addBtn="Add Education Section"
            />
          }
        />
      </div>
    </>
  );
}
