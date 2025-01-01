import ItemContainer from "./ItemContainer";
import ImgWithText from "../Texts/ImgWithText";
import addImg from "../../public/icons/plus.svg"
export default function CheckList({ items, onChange, onDelete, onAdd }) {
  return (
    <>
      {items.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            component={<ImgWithText item={item} callback={onChange} />}
            deleteCallback={onDelete}
            deleteArgs={item.id}
          />
        );
      })}
      <button className="add" onClick={onAdd}>
        <img src={addImg} alt="" />
      </button>
    </>
  );
}
