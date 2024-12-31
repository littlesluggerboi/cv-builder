export default function Text({ placeholder, styleClass, value, callback }) {
  function autoResize(e) {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  }

  function onChange(e) {
    callback(e.target.value);
  }

  return (
    <>
      <textarea
        rows={1}
        type="text"
        className={styleClass}
        placeholder={placeholder}
        onInput={autoResize}
        spellCheck={false}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
