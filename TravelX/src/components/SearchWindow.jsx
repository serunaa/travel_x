import "./searchwindow.css";
import { useState } from "react";

export const SearchWindow = () => {
  const [startDateSelected, setStartDateSelected] = useState("2024-06-01");
  const [endDateSelected, setEndDateSelected] = useState("2024-06-08");

  const handleStartDateChange = (event) => {
    setStartDateSelected(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDateSelected(event.target.value);
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
    <div className="searchWindow">
      <input
        className="query"
        type="text"
        name="destination"
        placeholder="Dokąd chcesz się udać?"
      />

      <button
        className="searchButton"
        onClick={() => {
          console.log("search button click");
        }}
      >
        <img src="src\images\searchIcon.png" width={80} height={80} />
      </button>

      <table className="dataTable">
        <tbody>
          <tr>
            <td className="column10p">od</td>
            <td className="column45p">{startDate}</td>
            <td rowSpan={2}>
              <b className="personNumberTitle">Ilość osób</b> <br />
              <input className="personNumber" type="number" name="adults" />
              os. dorosłe <b className="stylishArrow1">{"<"}</b>
              <br />
              <input className="personNumber" type="number" name="children" />
              dzieci <b className="stylishArrow1">{"<"}</b>
            </td>
          </tr>
          <tr>
            <td className="column10p">do</td>
            <td className="column45p">{endDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
