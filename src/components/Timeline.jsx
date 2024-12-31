import Text from "../Texts/Text";
import CollectionManager from "../utility/collectionManager";
import CheckList from "./CheckList";
let nextId = 0;
export default function TimeLine({ timeLineItem, callback, addValue }) {
  function updateH2(value) {
    const newItem = {
      ...timeLineItem,
      h2: {
        ...timeLineItem.h2,
        value: value,
      },
    };
    callback(newItem);
  }
  function updateH3(value) {
    const newItem = {
      ...timeLineItem,
      h3: {
        ...timeLineItem.h3,
        value: value,
      },
    };
    callback(newItem);
  }

  function updateP(value) {
    const newItem = {
      ...timeLineItem,
      p: {
        ...timeLineItem.p,
        value: value,
      },
    };
    callback(newItem);
  }

  function updateList(value) {
    const newItem = {
      ...timeLineItem,
      list: value,
    };
    callback(newItem);
  }
  const [onChange, onDelete] = CollectionManager(timeLineItem.list, updateList);
  function addItem() {
    const item = {
      id: nextId++,
      invert: false,
      placeholder: addValue,
      value: "",
      styleClass: "small-text",
    };
    updateList([...timeLineItem.list, item]);
  }

  return (
    <>
      <div className="timeline flex column">
        <Text
          placeholder={timeLineItem.h2.placeholder}
          styleClass={"large-text bold"}
          value={timeLineItem.h2.value}
          callback={updateH2}
        />
        <Text
          placeholder={timeLineItem.h3.placeholder}
          styleClass={"medium-text bold"}
          value={timeLineItem.h3.value}
          callback={updateH3}
        />
        <Text
          placeholder={timeLineItem.p.placeholder}
          styleClass={"small-text"}
          value={timeLineItem.p.value}
          callback={updateP}
        />
        <CheckList
          items={timeLineItem.list}
          onChange={onChange}
          onDelete={onDelete}
          onAdd={addItem}
          deleteButtonStyle={"delete"}
          invert={false}
          addValue={addValue}
          addButtonStyle={"add"}
        />
      </div>
    </>
  );
}
