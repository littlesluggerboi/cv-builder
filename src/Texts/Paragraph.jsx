export default function Paragraph({
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
            className={"small-text ".concat(className)}
            onChange={callback}
            placeholder="Add a paragraph"
          />
      ) : (
        <p style="white-space:pre" className={"small-text ".concat(className)}>
          {value ? value : placeholder}
        </p>
      )}
    </>
  );
}
