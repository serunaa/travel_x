import { useState } from "react";
import "./attractions.css";

export const Attractions = ({ changeStage, changeAttractions }) => {
  const [selectedAttractions, setSelectedAttractions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (value === "nie_dziękuję") {
      setSelectedAttractions(checked ? ["nie dziękuję"] : []);
    } else {
      setSelectedAttractions((prevSelected) =>
        checked
          ? [...prevSelected.filter((item) => item !== "nie dziękuję"), value]
          : prevSelected.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Attractions:", selectedAttractions);
    changeStage("blok_ubezpieczenie");
    // Assuming you want to pass a value to changeAttractions
    changeAttractions(selectedAttractions);
  };

  const att1 = {
    id: 1,
    name: "bilety wstępu do Katedry Narodzin św Marii w Mediolanie",
    priceText: "90zł / osoba",
    price: 90,
    image: "src/images/katedra.jpg",
  };

  const att2 = {
    id: 2,
    name: "bilety wstępu do opery La Scala",
    priceText: "45zł / osoba",
    price: 45,
    image: "src/images/opera.jpg",
  };

  return (
    <div className="attContent">
      <form onSubmit={handleSubmit}>
        <div className="attInfo">
          <img src={att1.image} width={200} height={133} />
          <label>
            <input
              type="checkbox"
              value={att1.name}
              checked={selectedAttractions.includes(att1.name)}
              onChange={handleCheckboxChange}
            />
            <h2>{att1.name}</h2>
          </label>
          <b className="priceDescription">{att1.priceText}</b>
        </div>
        <div className="attInfo">
          <img src={att2.image} width={200} height={133} />
          <label>
            <input
              type="checkbox"
              value={att2.name}
              checked={selectedAttractions.includes(att2.name)}
              onChange={handleCheckboxChange}
            />
            <h2>{att2.name}</h2>
          </label>
          <b className="priceDescription">{att2.priceText}</b>
        </div>
        <div className="attInfo">
          <label>
            <input
              type="checkbox"
              value="nie_dziękuję"
              checked={selectedAttractions.includes("nie dziękuję")}
              onChange={handleCheckboxChange}
            />
            <h2>Nie dziękuję</h2>
          </label>
        </div>
        <div className="attInfo">
          <button type="submit" className="chooseTransport">
            Przejdź dalej
          </button>
        </div>
      </form>
    </div>
  );
};
