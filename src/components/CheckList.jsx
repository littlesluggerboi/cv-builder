import ItemContainer from "./ItemContainer";
import ImgWithText from "../Texts/ImgWithText";
export default function CheckList({
  items,
  onChange,
  onDelete,
  onAdd,
  deleteButtonStyle,
  invert,
  addButtonStyle,
  addValue = "add"
}) {
  return (
    <>
      {items.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            component={<ImgWithText item={item} callback={onChange} />}
            itemContainerStyle={"grid skill center-align tiny-gap"}
            deleteButtonStyle={deleteButtonStyle}
            deleteCallback={onDelete}
            deleteArgs={item.id}
            invert={invert}
          />
        );
      })}
      <button className={addButtonStyle} onClick={onAdd}>{addValue}</button>
    </>
  );
}
