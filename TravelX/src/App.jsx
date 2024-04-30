import { useState } from "react";
import { useEffect } from "react";
import { Banner } from "./components/Banner";
import { SearchWindow } from "./components/SearchWindow";
import { Destination } from "./components/Destination";
import { Transport } from "./components/Transport";
import { Hotel } from "./components/Hotel";
import { Transport_NaMiejscu } from "./components/Transport_NaMiejscu";
import { Attractions } from "./components/Attractions";
import { Insurance } from "./components/Insurance";
import StarRating from "./components/StarRating";

function App() {
  const [formSubmitted, changeFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [activeStage, setActiveStage] = useState("blok_transport");
  const [chosenTransport, setChosenTransport] = useState("");
  const [chosenHotel, setChosenHotel] = useState("");
  const [chosenTransportNM, setChosenTransportNM] = useState("");
  const [chosenAttractions, setChosenAttractions] = useState("");
  const [chosenInsurance, setChosenInsurance] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const searchDestination = (data) => {
    setFormData(data);
    changeFormSubmitted(true);
  };

  const changeStage = (newStage) => {
    setActiveStage(newStage);
  };

  const changeTransport = (value) => {
    setChosenTransport(value);
  };

  const changeHotel = (value) => {
    setChosenHotel(value);
  };

  const changeTransportNM = (value) => {
    setChosenTransportNM(value);
  };

  const changeAttractions = (value) => {
    setChosenAttractions(value);
  };

  const changeInsurance = (value) => {
    setChosenInsurance(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowThankYou(true);
  };

  useEffect(() => {
    // Apply background image to body only when SearchWindow is rendered
    document.body.style.backgroundImage = formSubmitted
      ? "none"
      : 'url("src/images/beach2.png")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }, [formSubmitted]);

  return (
    <>
      <div className="container">
        <Banner
          displayText={!showThankYou && formSubmitted}
          formData={formData}
        />
        <div className="content">
          {formSubmitted && !showThankYou ? (
            <>
              <Destination activeStage={activeStage} />
              {activeStage === "blok_transport" && (
                <Transport
                  changeStage={changeStage}
                  changeTransport={changeTransport}
                />
              )}
              {activeStage === "blok_nocleg" && (
                <Hotel
                  chosenTransport={chosenTransport}
                  changeStage={changeStage}
                  changeHotel={changeHotel}
                />
              )}
              {activeStage === "blok_transport_nm" && (
                <Transport_NaMiejscu
                  changeStage={changeStage}
                  changeTransportNM={changeTransportNM}
                />
              )}
              {activeStage === "blok_atrakcje" && (
                <Attractions
                  changeStage={changeStage}
                  changeAttractions={changeAttractions}
                />
              )}

              {activeStage === "blok_ubezpieczenie" && (
                <Insurance
                  changeStage={changeStage}
                  changeInsurance={changeInsurance}
                />
              )}

              {activeStage === "blok_zaplata" && (
                <div className="sumContent">
                  <div className="summary">
                    <h1 className="summaryTitle">Podsumowanie</h1>
                    <b className="summaryT">Transport: </b> {chosenTransport}
                    <br />
                    <b className="summaryT">Nocleg: </b> {chosenHotel}
                    <br />
                    <b className="summaryT">Transport na miejscu: </b>
                    {chosenTransportNM}
                    <br />
                    <b className="summaryT">Atrakcje: </b> {chosenAttractions}
                    <br />
                    <b className="summaryT">Ubezpieczenie: </b>{" "}
                    {chosenInsurance}
                  </div>
                  <div className="payMethod">
                    <h1 className="priceDescription">Suma: 2705 zł</h1>
                    <h2>Wybierz sposób płatności</h2>
                    <div className="pays">
                      <form onSubmit={handleSubmit}>
                        <div className="pLabel">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                            />
                            <img
                              src="src/images/card.png"
                              alt="Card"
                              width={50}
                              height={40}
                            />
                            <b className="payDescription">Zapłać kartą</b>
                          </label>
                        </div>
                        <div className="pLabel">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="blik"
                            />
                            <img
                              src="src/images/blik.png"
                              alt="Blik"
                              width={50}
                              height={30}
                            />
                            <b className="payDescription">Zapłać Blikiem</b>
                          </label>
                        </div>
                        <div className="pLabel">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="przelew"
                            />
                            <img
                              src="src/images/przelew.jpg"
                              alt="Przelew"
                              width={50}
                              height={40}
                            />
                            <b className="payDescription">Zapłać przelewem</b>
                          </label>
                        </div>
                        <div className="pLabel">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="paypal"
                            />
                            <img
                              src="src/images/paypal.png"
                              alt="PayPal"
                              width={50}
                              height={40}
                            />
                            <b className="payDescription">Zapłać Paypalem</b>
                          </label>
                        </div>
                        <div className="pLabel">
                          <button type="submit" className="pButtonSubmit">
                            Zatwierdź
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {!showThankYou && <SearchWindow onSearch={searchDestination} />}
            </>
          )}

          {showThankYou && (
            <div className="thankYou">
              <h1>Dziękujemy za skorzystanie z naszej platformy TravelX!</h1>
              <h2>Jak oceniasz nasze usługi?</h2>
              <StarRating
                onChange={(value) => console.log("Selected rating:", value)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
