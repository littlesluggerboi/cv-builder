import Section from "./Section";
import Text from "../Texts/Text";
import contactImg from "../../public/icons/contacts.svg";
import aboutImg from "../../public/icons/account-tie.svg";
import skillsImg from "../../public/icons/cog.svg";
import languageImg from "../../public/icons/translate.svg";
import phoneImg from "../../public/icons/phone.svg";
import emailImg from "../../public/icons/email.svg";
import addressImg from "../../public/icons/map-marker.svg";
import ImgWithText from "../Texts/ImgWithText";
import stateGenerator from "../utility/stateGenerator";
import CheckList from "./CheckList";
import CollectionManager from "../utility/collectionManager";

let nextId = 0;

export default function SideBar() {
  const [about, setAbout] = stateGenerator();
  const [phone, setPhone] = stateGenerator({
    imgSrc: phoneImg,
    invert: true,
    placeholder: "Add a phone number",
    value: "",
    styleClass: "small-text b-black white",
  });
  const [email, setEmail] = stateGenerator({
    imgSrc: emailImg,
    invert: true,
    placeholder: "Add an email address",
    value: "",
    styleClass: "small-text b-black white",
  });
  const [address, setAddress] = stateGenerator({
    imgSrc: addressImg,
    invert: true,
    placeholder: "Add an address",
    value: "",
    styleClass: "small-text b-black white",
  });
  const [skills, setSkills] = stateGenerator([]);
  const [changeSkill, deleteSkill] = CollectionManager(skills, setSkills);

  function addSkill() {
    const skill = {
      id: nextId++,
      invert: true,
      placeholder: "Add a skill",
      value: "",
      styleClass: "small-text b-black white",
    };
    setSkills([...skills, skill]);
  }

  const [languages, setLanguages] = stateGenerator([]);
  const [changeLanguage, deleteLanguage] = CollectionManager(
    languages,
    setLanguages
  );

  function addLanguage() {
    const language = {
      id: nextId++,
      invert: true,
      placeholder: "Add a language",
      value: "",
      styleClass: "small-text b-black white",
    };
    setLanguages([...languages, language]);
  }

  return (
    <>
      <div className="sidebar">
        <div className="img-container"></div>
        <Section
          srcImg={aboutImg}
          imgClass="invert"
          sectionTitle="About Me"
          textClass="white"
          sectionContent={
            <Text
              placeholder={"Add a short description"}
              styleClass="small-text b-black white"
              value={about}
              callback={setAbout}
            />
          }
        />

        <Section
          srcImg={contactImg}
          imgClass="invert"
          sectionTitle="Contacts"
          textClass="white"
          sectionContentStyle="grid center-align tiny-gap "
          sectionContent={
            <>
              <ImgWithText item={phone} callback={setPhone} />
              <ImgWithText item={email} callback={setEmail} />
              <ImgWithText item={address} callback={setAddress} />
            </>
          }
        />

        <Section
          srcImg={skillsImg}
          imgClass="invert"
          sectionTitle="Skills"
          textClass="white"
          sectionContent={
            <CheckList
              items={skills}
              onChange={changeSkill}
              onDelete={deleteSkill}
              onAdd={addSkill}
              deleteButtonStyle={"delete b-black white"}
              invert={true}
            />
          }
          sectionContentStyle="flex small-gap column"
        />

        <Section
          srcImg={languageImg}
          imgClass="invert"
          sectionTitle="Languages"
          textClass="white"
          sectionContent={
            <CheckList
              items={languages}
              onChange={changeLanguage}
              onDelete={deleteLanguage}
              onAdd={addLanguage}
              deleteButtonStyle={"delete b-black white"}
              invert={true}
            />
          }
          sectionContentStyle="flex small-gap column"
        />
      </div>
    </>
  );
}
