import { useState } from "react";
import { Banner } from "./components/Banner";
import { SearchWindow } from "./components/SearchWindow";
import { Destination } from "./components/Destination";
import { Transport } from "./components/Transport";
import { Hotel } from "./components/Hotel";

function App() {
  const [formSubmitted, changeFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [activeStage, setActiveStage] = useState("blok_transport");
  const [chosenTransport, setChosenTransport] = useState("");
  const [chosenHotel, setChosenHotel] = useState("");

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

  return (
    <>
      <div className="container">
        <Banner displayText={formSubmitted} formData={formData} />
        <div className="content">
          {formSubmitted ? (
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
            </>
          ) : (
            <>
              <SearchWindow onSearch={searchDestination} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
