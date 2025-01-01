export default function Section({
  srcImg,
  sectionTitle,
  sectionContent,
}) {
  return (
    <>
      <div className="section">
        <div className="section-header">
          <img
            src={srcImg}
            alt=""
          />
          <h2>{sectionTitle}</h2>
        </div>
        <div className="section-content">
          {sectionContent}
        </div>
      </div>
    </>
  );
}
