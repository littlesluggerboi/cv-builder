import delImg from "../../public/icons/delete-outline.svg";
export default function ({
  component,
  deleteButtonStyle = "flex center-align",
  itemContainerStyle,
  invert = true,
  deleteCallback,
  deleteArgs,
}) {
  function deleteFunction() {
    deleteCallback(deleteArgs);
  }

  return (
    <>
      <div className={"".concat(itemContainerStyle)}>
        {component}
        <button
          className={
            deleteButtonStyle !== "flex center-align"
              ? "flex center-align ".concat(deleteButtonStyle)
              : deleteButtonStyle
          }
          onClick={deleteFunction}
        >
          <img className={invert ? "invert" : ""} src={delImg} alt="" />
        </button>
      </div>
    </>
  );
}
