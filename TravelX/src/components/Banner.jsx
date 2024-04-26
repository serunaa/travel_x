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
          <text className="dateDisplay">{formData.startDate}</text> -{" "}
          <text className="dateDisplay">{formData.endDate}</text>{" "}
          {formData.adults} {formData.adultsTxt}, {formData.children}{" "}
          {formData.childrenTxt}
        </h1>
      )}
    </div>
  );
};
