import CollectionManager from "../utility/collectionManager";
import stateGenerator from "../utility/stateGenerator";
import ItemContainer from "./ItemContainer";
import TimeLine from "./Timeline";
let nextId = 0;
export default function GroupTimeLine({
  h2placeholder,
  h3placeholder,
  pplaceholder,
  addValue,
  addBtn = "Add"
}) {
  const [timelines, setTimeLines] = stateGenerator([]);
  const [changeTimeline, deleteTimeline] = CollectionManager(
    timelines,
    setTimeLines
  );
  function addTimeLine() {
    const newTime = {
      id: nextId++,
      h2: {
        placeholder: h2placeholder,
        value: "",
      },
      h3: {
        placeholder: h3placeholder,
        value: "",
      },
      p: {
        placeholder: pplaceholder,
        value: "",
      },
      list: [],
    };
    setTimeLines([...timelines, newTime]);
  }

  return (
    <>
      {timelines.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            component={
              <TimeLine
                timeLineItem={item}
                callback={changeTimeline}
                addValue={addValue}
              />
            }
            itemContainerStyle={"grid two-cols tiny-gap"}
            invert={false}
            deleteCallback={deleteTimeline}
            deleteArgs={item.id}
            deleteButtonStyle="delete"
          />
        );
      })}

      {/* fucking add a new add button */}
      <button className="add" onClick={addTimeLine}>
        {addBtn}
      </button>
    </>
  );
}
