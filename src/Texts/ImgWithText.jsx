import defaultImg from "../../public/icons/circle-small.svg";
import Text from "./Text";
export default function ImgWithText({ item, callback }) {
  function onChange(value) {
    const newItem = { ...item, value: value };
    callback(newItem);
  }

  return (
    <>
      <img
        src={item.imgSrc ? item.imgSrc : defaultImg}
        alt=""
        className={item.invert ? "icon-small invert" : "icon-small"}
      />
      <Text
        placeholder={item.placeholder}
        styleClass={item.styleClass}
        value={item.value}
        callback={onChange}
      />
    </>
  );
}
