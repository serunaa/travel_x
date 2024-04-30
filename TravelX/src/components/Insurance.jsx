import { useState } from "react";
import "./insurance.css";

export const Insurance = ({ changeStage, changeInsurance }) => {
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const ins1 = {
    id: 1,
    name: "Allianz - 90zł/osoba",
    icon: "src/images/ins1.png",
    price: 90,
  };
  const ins2 = {
    id: 2,
    name: "AXA Assistance - 30zł/osoba",
    icon: "src/images/ins2.png",
    price: 30,
  };
  const ins3 = {
    id: 3,
    name: "Warta - 40zł/osoba",
    icon: "src/images/ins3.png",
    price: 40,
  };

  const handleOptionChange = (event) => {
    setSelectedInsurance(event.target.value);
  };

  const chooseInsurance = (event) => {
    event.preventDefault();
    if (selectedInsurance) {
      changeStage("blok_zaplata");
      console.log(selectedInsurance);
      changeInsurance(selectedInsurance);
    } else {
      alert("Proszę wybrać ubezpieczenie");
    }
  };

  return (
    <div className="insContent">
      <form onSubmit={chooseInsurance}>
        <div className="insOption">
          <h2 className="insuranceTitle">
            <input
              type="radio"
              name="insurance"
              value={ins1.name}
              checked={selectedInsurance === ins1.name}
              onChange={handleOptionChange}
            />
            {ins1.name}
          </h2>
          <div className="insuranceInfo">
            <img
              className="insuranceIcon"
              src={ins1.icon}
              alt={ins1.name}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="insOption">
          <h2 className="insuranceTitle">
            <input
              type="radio"
              name="insurance"
              value={ins2.name}
              checked={selectedInsurance === ins2.name}
              onChange={handleOptionChange}
            />
            {ins2.name}
          </h2>
          <div className="insuranceInfo">
            <img
              className="insuranceIcon"
              src={ins2.icon}
              alt={ins2.name}
              width={150}
              height={100}
            />
          </div>
        </div>
        <div className="insOption">
          <h2 className="insuranceTitle">
            <input
              type="radio"
              name="insurance"
              value={ins3.name}
              checked={selectedInsurance === ins3.name}
              onChange={handleOptionChange}
            />
            {ins3.name}
          </h2>
          <div className="insuranceInfo">
            <img
              className="insuranceIcon"
              src={ins3.icon}
              alt={ins3.name}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="insOption">
          <h2 className="insuranceTitle">
            <input
              type="radio"
              name="insurance"
              value="nie, dziękuję"
              checked={selectedInsurance === "nie, dziękuję"}
              onChange={handleOptionChange}
            />
            Nie, dziękuję
          </h2>
          <div className="insuranceInfo"></div>
        </div>
        <div className="insOption">
          <div className="insuranceButton">
            <button type="submit" className="chooseTransport">
              Przejdź dalej
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
