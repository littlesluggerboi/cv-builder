import Section from "./Section";
import Text from "../Texts/Text";
import contactImg from "../assets/icons/contacts.svg";
import aboutImg from "../assets/icons/account-tie.svg";
import skillsImg from "../assets/icons/cog.svg";
import languageImg from "../assets/icons/translate.svg";
import phoneImg from "../assets/icons/phone.svg";
import emailImg from "../assets/icons/email.svg";
import addressImg from "../assets/icons/map-marker.svg";
import ImgWithText from "../Texts/ImgWithText";
import stateGenerator from "../utility/stateGenerator";
import CheckList from "./CheckList";
import CollectionManager from "../utility/collectionManager";

let nextId = 0;

export default function SideBar() {
  const [about, setAbout] = stateGenerator();
  const [phone, setPhone] = stateGenerator({
    imgSrc: phoneImg,
    placeholder: "Add a phone number",
    value: "",
  });
  const [email, setEmail] = stateGenerator({
    imgSrc: emailImg,
    placeholder: "Add an email address",
    value: "",
  });
  const [address, setAddress] = stateGenerator({
    imgSrc: addressImg,
    placeholder: "Add an address",
    value: "",
  });
  const [skills, setSkills] = stateGenerator([]);
  const [changeSkill, deleteSkill] = CollectionManager(skills, setSkills);

  function addSkill() {
    const skill = {
      id: nextId++,
      placeholder: "Add a skill",
      value: "",
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
      placeholder: "Add a language",
      value: "",
    };
    setLanguages([...languages, language]);
  }

  return (
    <>
      <div className="sidebar">
        <div className="img-container"></div>
        <Section
          srcImg={aboutImg}
          sectionTitle="About Me"
          sectionContent={
            <Text
              placeholder={"Add a short description"}
              value={about}
              callback={setAbout}
            />
          }
        />

        <Section
          srcImg={contactImg}
          sectionTitle="Contacts"
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
          sectionTitle="Skills"
          sectionContent={
            <CheckList
              items={skills}
              onChange={changeSkill}
              onDelete={deleteSkill}
              onAdd={addSkill}
            />
          }
        />

        <Section
          srcImg={languageImg}
          sectionTitle="Languages"
          sectionContent={
            <CheckList
              items={languages}
              onChange={changeLanguage}
              onDelete={deleteLanguage}
              onAdd={addLanguage}
            />
          }
        />
      </div>
    </>
  );
}
