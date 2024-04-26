import { useState } from "react";
import "./hotel.css";

export const Hotel = ({ chosenTransport, changeStage, changeHotel }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotel1 = {
    id: 1,
    name: "Hotel Mamma Mia ***",
    stayStart: chosenTransport === "wizzair" ? "16.05.2024" : "17.05.2024",
    stayEnd: "20.05.2024",
    checkIn: "14:00",
    checkOut: "11:00",
    features: (
      <ul>
        <li>apartament</li>
        <li>aneks kucheny</li>
        <li>klimatyzacja</li>
        <li>parking</li>
        <li>bez dzieci</li>
      </ul>
    ),
    priceText: "cena za 4 noce za 1200zł / 2os.",
    price: 1200,
    img: "src/images/hotel1.jpg",
  };
  const hotel2 = {
    id: 2,
    name: "Hotel Cilegia **",
    stayStart: chosenTransport === "wizzair" ? "16.05.2024" : "17.05.2024",
    stayEnd: "20.05.2024",
    checkIn: "12:00",
    checkOut: "11:00",
    features: (
      <ul>
        <li>pokój 2 osobowy z łazienką</li>
        <li>klimatyzacja</li>
        <li>parking</li>
      </ul>
    ),
    priceText: "cena za 4 noce za 800zł / 2os.",
    price: 800,
    img: "src/images/hotel2.jpg",
  };

  const handleOptionChange = (event) => {
    setSelectedHotel(event.target.value);
  };

  const chooseHotel = (event) => {
    event.preventDefault();
    if (selectedHotel) {
      changeStage("blok_transport_nm");
      console.log(selectedHotel);
      changeHotel(selectedHotel);
    } else {
      alert("Proszę wybrać hotel");
    }
  };

  return (
    <div className="hotelContent">
      <form onSubmit={chooseHotel}>
        <div className="hotelName">
          <h2>
            <input
              type="radio"
              name="hotel"
              value={hotel1.name}
              checked={selectedHotel === hotel1.name}
              onChange={handleOptionChange}
            />
            {hotel1.name}
          </h2>
          <i>
            {hotel1.stayStart} - {hotel1.stayEnd}{" "}
          </i>
        </div>
        <div className="hotelInfo">
          <div className="imageDiv">
            <img
              className="hotelImg"
              src={hotel1.img}
              width={500}
              height={300}
            />
          </div>
          <div className="hotelDescription">
            <b>zameldowanie od {hotel1.checkIn}</b>
            <br />
            <b>wymeldowanie do {hotel1.checkOut}</b>
            <br />
            {hotel1.features}
            <br />
            <div className="priceDescription">{hotel1.priceText}</div>
          </div>
        </div>
        <div className="hotelName">
          <h2>
            <input
              type="radio"
              name="hotel"
              value={hotel2.name}
              checked={selectedHotel === hotel2.name}
              onChange={handleOptionChange}
            />
            {hotel2.name}
          </h2>
          <i>
            {hotel2.stayStart} - {hotel2.stayEnd}{" "}
          </i>
        </div>
        <div className="hotelInfo">
          <div className="imageDiv">
            <img
              className="hotelImg"
              src={hotel2.img}
              width={500}
              height={300}
            />
          </div>
          <div className="hotelDescription">
            <b>zameldowanie od {hotel2.checkIn}</b>
            <br />
            <b>wymeldowanie do {hotel2.checkOut}</b>
            <br />
            {hotel2.features}
            <br />
            <div className="priceDescription">{hotel2.priceText}</div>
          </div>
        </div>
        <div className="fullTransport2">
          <button type="submit" className="chooseTransport">
            Przejdź dalej
          </button>
        </div>
      </form>
    </div>
  );
};
