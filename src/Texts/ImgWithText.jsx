import defaultImg from "../assets/icons/circle-small.svg";
import Text from "./Text";
export default function ImgWithText({ item, callback }) {
  function onChange(value) {
    const newItem = { ...item, value: value };
    callback(newItem);
  }
  return (
    <>
      <div className="img-with-text">
        <img
          src={item.imgSrc ? item.imgSrc : defaultImg}
          alt=""
        />
        <Text
          placeholder={item.placeholder}
          styleClass={item.styleClass}
          value={item.value}
          callback={onChange}
        />
      </div>
    </>
  );
}
