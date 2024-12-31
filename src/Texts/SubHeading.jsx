export default function SubHeading({
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
            className={"medium-text bold".concat(className)}
            onChange={callback}
            placeholder={placeholder}
          />
        ) : (
          <h3 className={"medium-text bold".concat(className)}>{value ? value : placeholder}</h3>
        )}
      </>
    );
  }
  