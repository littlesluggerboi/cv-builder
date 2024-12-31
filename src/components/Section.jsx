export default function Section({
  srcImg,
  sectionTitle,
  sectionContent,
  imgClass = "",
  textClass,
  sectionContentStyle = "section-content",
}) {
  return (
    <>
      <div className="section flex column small-gap">
        <div className="section-header flex center-align small-gap">
          <img
            src={srcImg}
            alt=""
            className={imgClass.concat(" icon-medium")}
          />
          <h2 className={textClass}>{sectionTitle}</h2>
        </div>
        <div
          className={
            sectionContentStyle === "section-content"
              ? "section-content"
              : "section-content ".concat(sectionContentStyle)
          }
        >
          {sectionContent}
        </div>
      </div>
    </>
  );
}
