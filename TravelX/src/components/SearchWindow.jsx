import "./searchwindow.css";
import { useState } from "react";

export const SearchWindow = ({ onSearch }) => {
  const [destination, setDestination] = useState("Mediolan");
  const [startDateSelected, setStartDateSelected] = useState("2024-06-01");
  const [endDateSelected, setEndDateSelected] = useState("2024-06-08");
  const [adultPerson, setAdultPerson] = useState(0);
  const [childPerson, setChildPerson] = useState(0);
  const [txtDorosli, setTxtDorosli] = useState(" ");
  const [txtDzieci, setTxtDzieci] = useState(" ");

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDateSelected(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDateSelected(event.target.value);
  };

  const handleAdultPersonChange = (event) => {
    setAdultPerson(event.target.value);

    if (event.target.value == 1) {
      setTxtDorosli("osoba dorosła");
    } else if (
      (event.target.value > 4 && event.target.value < 22) ||
      event.target.value % 10 === 0 ||
      (event.target.value % 10) - 1 === 0
    ) {
      setTxtDorosli("osób dorosłych");
    } else {
      setTxtDorosli("osoby dorosłe");
    }
  };

  const handleChildPersonChange = (event) => {
    setChildPerson(event.target.value);

    if (event.target.value == 1) {
      setTxtDzieci("dziecko");
    } else {
      setTxtDzieci("dzieci");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      destination,
      startDate: startDateSelected,
      endDate: endDateSelected,
      adults: adultPerson,
      children: childPerson,
      adultsTxt: txtDorosli,
      childrenTxt: txtDzieci,
    };

    console.log(formData.adultsTxt);
    console.log(formData.childrenTxt);
    console.log(txtDorosli);
    console.log(txtDzieci);
    onSearch(formData);
  };

  let startDate = (
    <input
      type="date"
      className="calendar"
      id="startDate"
      value={startDateSelected}
      onChange={handleStartDateChange}
      min="2024-06-01"
      max="2025-12-24"
    />
  );
  let endDate = (
    <input
      type="date"
      className="calendar"
      id="endDate"
      value={endDateSelected}
      onChange={handleEndDateChange}
      min="2024-06-08"
      max="2025-12-31"
    />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="query"
          type="text"
          name="destination"
          placeholder={destination}
          onChange={handleDestinationChange}
        />

        <button disabled={destination.length === 0} className="searchButton">
          <img src="src\images\searchIcon.png" width={80} height={80} />
        </button>

        <table className="dataTable">
          <tbody>
            <tr>
              <td className="column10p">od</td>
              <td className="column45p">{startDate}</td>
              <td rowSpan={2}>
                <b className="personNumberTitle">Ilość osób</b> <br />
                <input
                  className="personNumber"
                  type="number"
                  name="adults"
                  value={adultPerson}
                  onChange={handleAdultPersonChange}
                />
                os. dorosłe <b className="stylishArrow1">{"<"}</b>
                <br />
                <input
                  className="personNumber"
                  type="number"
                  name="children"
                  value={childPerson}
                  onChange={handleChildPersonChange}
                />
                dzieci <b className="stylishArrow1">{"<"}</b>
              </td>
            </tr>
            <tr>
              <td className="column10p">do</td>
              <td className="column45p">{endDate}</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
