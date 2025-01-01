import Text from "../Texts/Text";
import CollectionManager from "../utility/collectionManager";
import CheckList from "./CheckList";
let nextId = 1;
export default function TimeLine({ timeLineItem, callback }) {
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
      placeholder: "Add a description",
      value: "",
    };
    updateList([...timeLineItem.list, item]);
  }

  return (
    <>
      <div className="timeline">
        <Text
          placeholder={timeLineItem.h2.placeholder}
          value={timeLineItem.h2.value}
          callback={updateH2}
        />
        <Text
          placeholder={timeLineItem.h3.placeholder}
          value={timeLineItem.h3.value}
          callback={updateH3}
        />
        <Text
          placeholder={timeLineItem.p.placeholder}
          value={timeLineItem.p.value}
          callback={updateP}
        />
        <CheckList
          items={timeLineItem.list}
          onChange={onChange}
          onDelete={onDelete}
          onAdd={addItem}
        />
      </div>
    </>
  );
}
