export default function Header({
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
          className={"big-text bold".concat(className)}
          onChange={callback}
          placeholder={placeholder}
        />
      ) : (
        <h1 className={"big-text bold".concat(className)}>{value ? value : placeholder}</h1>
      )}
    </>
  );
}
