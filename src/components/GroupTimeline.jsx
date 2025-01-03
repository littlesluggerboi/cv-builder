import CollectionManager from "../utility/collectionManager";
import stateGenerator from "../utility/stateGenerator";
import ItemContainer from "./ItemContainer";
import TimeLine from "./Timeline";
let nextId = 2;
export default function GroupTimeLine({
  h2placeholder,
  h3placeholder,
  pplaceholder,
  addValue,
}) {
  const [timelines, setTimeLines] = stateGenerator([
    {
      id: 0,
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
      list: [
        {
          id: 0,
          placeholder: "Add a description",
          value: "",
        },
      ],
    },
    {
      id: 1,
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
      list: [
        {
          id: 0,
          placeholder: "Add a description",
          value: "",
        },
      ],
    },
  ]);
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
      list: [
        {
          id: 0,
          placeholder: "Add a description",
          value: "",
        },
      ],
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
            deleteCallback={deleteTimeline}
            deleteArgs={item.id}
          />
        );
      })}

      <button className="add" onClick={addTimeLine}>
        Add a new Item
      </button>
    </>
  );
}
