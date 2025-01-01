
import { useState } from "react";
import delImg from "../../public/icons/delete-outline.svg";
export default function ({ component, deleteCallback, deleteArgs }) {
  function deleteFunction() {
    deleteCallback(deleteArgs);
  }
  const [focus, setFocus] = useState(false);

  function onfocus(){
    setFocus(true);
  }

  function onblur(){
    setFocus(false);
  }

  return (
    <>
      <div className="item-container" onMouseEnter={onfocus} onMouseLeave={onblur}>
        {component}
        {focus && <button className="delete" onClick={deleteFunction}>
          <img src={delImg} alt="Delete Icon" />
        </button>}
      </div>
    </>
  );
}
