import { useState } from "react";
import "./transport.css";

export const Transport = ({ changeStage, changeTransport }) => {
  const [selectedTransport, setSelectedTransport] = useState(null);

  const transport1 = {
    id: 1,
    name: "Linie lotnicze WizzAir",
    priceDescription: "400zł/os. w obie strony",
    price: 400,
    icon: "src/images/wizzair_logo.png",
    cityStart: "Wrocław (WRO)",
    cityFinish: "Mediolan-Bergamo (BGY)",
    dateStart: "16.05.2024",
    dateFinish: "16.05.2024",
    hourStart: "11:30",
    hourFinish: "13:10",
    dateStart2: "20.05.2024",
    dateFinish2: "20.05.2024",
    hourStart2: "18:05",
    hourFinish2: "19:45",
  };
  const transport2 = {
    id: 2,
    name: "Flixbus",
    priceDescription: "530zł/os. w obie strony",
    price: 530,
    icon: "src/images/flixbus_logo.png",
    cityStart: "Wrocław Plac Grunwaldzki",
    cityFinish: "Mediolan (Lampugnano)",
    dateStart: "16.05.2024",
    dateFinish: "17.05.2024",
    hourStart: "19:40",
    hourFinish: "20:40",
    dateStart2: "20.05.2024",
    dateFinish2: "21.05.2024",
    hourStart2: "20:00",
    hourFinish2: "22:00",
  };

  const handleOptionChange = (event) => {
    setSelectedTransport(event.target.value);
  };

  const chooseTransport = (event) => {
    event.preventDefault();
    if (selectedTransport) {
      changeStage("blok_nocleg");
      console.log(selectedTransport);
      changeTransport(selectedTransport);
    } else {
      alert("Proszę wybrać środek transportu");
    }
  };

  return (
    <div className="transportContent">
      <form onSubmit={chooseTransport}>
        <h2 className="transportTitle">
          <input
            type="radio"
            name="transport"
            value={transport1.name}
            checked={selectedTransport === transport1.name}
            onChange={handleOptionChange}
          />
          {transport1.name} - {transport1.priceDescription}
        </h2>
        <div className="fullTransport1">
          <img
            className="transportLogo"
            src={transport1.icon}
            width={325}
            height={215}
          />
          <div className="blok">
            <div className="podroz">
              <div className="tD_left">
                {transport1.cityStart}
                <br />
                {transport1.dateStart}
                <br />
                {transport1.hourStart}
              </div>
              <div className="tD_mid">
                <b className="stylishArrow1">{"->"}</b>
              </div>
              <div className="tD_right">
                {transport1.cityFinish}
                <br />
                {transport1.dateFinish}
                <br />
                {transport1.hourFinish}
              </div>
            </div>
            <div className="podroz">
              <div className="tD_left">
                {transport1.cityFinish}
                <br />
                {transport1.dateStart2}
                <br />
                {transport1.hourStart2}
              </div>
              <div className="tD_mid">
                <b className="stylishArrow1">{"->"}</b>
              </div>
              <div className="tD_right">
                {transport1.cityStart}
                <br />
                {transport1.dateFinish2}
                <br />
                {transport1.hourFinish2}
              </div>
            </div>
          </div>
        </div>
        <h2 className="transportTitle">
          <input
            type="radio"
            name="transport"
            value={transport2.name}
            checked={selectedTransport === transport2.name}
            onChange={handleOptionChange}
          />
          {transport2.name} - {transport2.priceDescription}
        </h2>
        <div className="fullTransport1">
          <img
            className="transportLogo"
            src={transport2.icon}
            width={325}
            height={215}
          />
          <div className="blok">
            <div className="podroz">
              <div className="tD_left">
                {transport2.cityStart}
                <br />
                {transport2.dateStart}
                <br />
                {transport2.hourStart}
              </div>
              <div className="tD_mid">
                <b className="stylishArrow1">{"->"}</b>
              </div>
              <div className="tD_right">
                {transport2.cityFinish}
                <br />
                {transport2.dateFinish}
                <br />
                {transport2.hourFinish}
              </div>
            </div>
            <div className="podroz">
              <div className="tD_left">
                {transport2.cityFinish}
                <br />
                {transport2.dateStart2}
                <br />
                {transport2.hourStart2}
              </div>
              <div className="tD_mid">
                <b className="stylishArrow1">{"->"}</b>
              </div>
              <div className="tD_right">
                {transport2.cityStart}
                <br />
                {transport2.dateFinish2}
                <br />
                {transport2.hourFinish2}
              </div>
            </div>
          </div>
        </div>
        <div className="fullTransport2">
          <button className="chooseTransport">Przejdź dalej</button>
        </div>
      </form>
    </div>
  );
};
