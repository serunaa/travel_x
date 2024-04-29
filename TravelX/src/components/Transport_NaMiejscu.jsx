import { useState } from "react";
import "./transport_namiejscu.css";

export const Transport_NaMiejscu = ({ changeStage, changeTransportNM }) => {
  const [extraContent, setExtraContent] = useState(null);
  const [selectedTransportNM, setSelectedTransportNM] = useState(null);

  const handleButtonClick = (content) => {
    if (content === null) {
      // If the "Nie dziękuję" button is clicked, change the stage to "blok_atrakcje"
      changeStage("blok_atrakcje");
      changeTransportNM("nie, dziękuję");
    } else {
      // Otherwise, toggle the extra content
      setExtraContent(content);
    }
  };

  const chooseTransportNM = (event) => {
    event.preventDefault();
    if (selectedTransportNM) {
      changeStage("blok_atrakcje");
      console.log(selectedTransportNM);
      changeTransportNM(selectedTransportNM);
    } else {
      alert("Proszę wybrać środek transportu");
    }
  };

  const car1 = {
    id: 1,
    image: "src/images/volkswagen.png",
    name: "Volkswagen Golf",
    description: (
      <ul>
        <li>ubezpieczenie OC</li>
        <li>bez limitu kilometrów</li>
        <li>ubezpieczenie od kradzieży</li>
      </ul>
    ),
    priceText: "500zł razem",
    price: 500,
  };

  const car2 = {
    id: 2,
    image: "src/images/renault.png",
    name: "Renault Clio",
    description: (
      <ul>
        <li>ubezpieczenie OC</li>
        <li>bez limitu kilometrów</li>
        <li>ubezpieczenie od kradzieży</li>
      </ul>
    ),
    priceText: "500zł razem",
    price: 500,
  };

  const p_transportTickets1 = {
    id: 3,
    image: "src/images/autobus.jpg",
    name: "Bilet na autobus miejski",
    description: (
      <ul>
        <li>bilet ma 10 użyć</li>
        <li>możliwość kursowania wszystkimi liniami</li>
      </ul>
    ),
    priceText: "80zł",
    price: 80,
  };

  const p_transportTickets2 = {
    id: 4,
    image: "src/images/metro.png",
    name: "Bilety na metro",
    description: (
      <ul>
        <li>komplet 6 biletów</li>
        <li>możliwość kursowania wszystkimi liniami</li>
      </ul>
    ),
    priceText: "60zł",
    price: 60,
  };

  const handleOptionChange = (event) => {
    setSelectedTransportNM(event.target.value);
  };

  return (
    <div className="TransportNMcontent">
      <div className="TransportTypeButtons">
        <button className="buttons_03" onClick={() => handleButtonClick("car")}>
          1. Wypożyczenie samochodu
        </button>

        <button
          className="buttons_03"
          onClick={() => handleButtonClick("p_transportTickets")}
        >
          2. Transport publiczny
        </button>

        <button className="buttons_04" onClick={() => handleButtonClick(null)}>
          3. Nie dziękuję
        </button>
      </div>

      <form onSubmit={chooseTransportNM}>
        <div className="vehicleSection">
          {extraContent === "car" && (
            <>
              <div className="carInfo">
                <div className="vehicleImg">
                  <img src={car1.image} width={450} height={278} />
                </div>
                <div className="vehicleDesc">
                  <h2>{car1.name}</h2>
                  {car1.description}
                  <br />
                  <input
                    type="radio"
                    name="transportNM"
                    value={car1.name}
                    checked={selectedTransportNM === car1.name}
                    onChange={handleOptionChange}
                  />
                  <b className="priceDescription">{car1.priceText}</b>
                </div>
              </div>
              <div className="carInfo">
                <div className="vehicleImg">
                  <img src={car2.image} width={450} height={278} />
                </div>
                <div className="vehicleDesc">
                  <h2>{car2.name}</h2>
                  {car2.description}
                  <br />
                  <input
                    type="radio"
                    name="transportNM"
                    value={car2.name}
                    checked={selectedTransportNM === car2.name}
                    onChange={handleOptionChange}
                  />
                  <b className="priceDescription">{car2.priceText}</b>
                </div>
              </div>
              <div className="fullTransport2">
                <button className="chooseTransport">Przejdź dalej</button>
              </div>
            </>
          )}
          {extraContent === "p_transportTickets" && (
            <>
              <div className="carInfo">
                <div className="vehicleImg">
                  <img
                    src={p_transportTickets1.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="vehicleDesc">
                  <h2>{p_transportTickets1.name}</h2>
                  {p_transportTickets1.description}
                  <br />
                  <input
                    type="radio"
                    name="transportNM"
                    value={p_transportTickets1.name}
                    checked={selectedTransportNM === p_transportTickets1.name}
                    onChange={handleOptionChange}
                  />
                  <b className="priceDescription">
                    {p_transportTickets1.priceText}
                  </b>
                </div>
              </div>
              <div className="carInfo">
                <div className="vehicleImg">
                  <img
                    src={p_transportTickets2.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="vehicleDesc">
                  <h2>{p_transportTickets2.name}</h2>
                  {p_transportTickets2.description}
                  <br />
                  <input
                    type="radio"
                    name="transportNM"
                    value={p_transportTickets2.name}
                    checked={selectedTransportNM === p_transportTickets2.name}
                    onChange={handleOptionChange}
                  />
                  <b className="priceDescription">
                    {p_transportTickets2.priceText}
                  </b>
                </div>
              </div>
              <div className="fullTransport2">
                <button className="chooseTransport">Przejdź dalej</button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
