import "./banner.css";

export const Banner = ({ displayText, formData }) => {
  return (
    <div className="banner">
      <img
        className="bannerLogo"
        src="src\images\travelX_square.jpg"
        width={200}
        height={200}
      />
      {displayText && formData && (
        <h1 className="destinationInfo">
          {formData.destination},{" "}
          <b className="dateDisplay">{formData.startDate}</b> -{" "}
          <b className="dateDisplay">{formData.endDate}</b>{" "}
          {formData.adults === 0 ? "" : formData.adults} {formData.adultsTxt}
          {formData.children === 0 ? "" : ", " + formData.children}
          {formData.childrenTxt}
        </h1>
      )}
    </div>
  );
};
