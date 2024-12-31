export default function Heading({
    edit = true,
    value,
    callback,
    placeholder,
    className = "",
  }) {
    return (
      <>
        {edit ? (
          <input
            type="text"
            className={"large-text bold".concat(className)}
            onChange={callback}
            placeholder={placeholder}
          />
        ) : (
          <h2 className={"large-text bold".concat(className)}>{value ? value : placeholder}</h2>
        )}
      </>
    );
  }
  