import { useState } from "react";
import { Banner } from "./components/Banner";
import { SearchWindow } from "./components/SearchWindow";
import { Destination } from "./components/Destination";

function App() {
  const [formSubmitted, changeFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const searchDestination = (data) => {
    setFormData(data);
    changeFormSubmitted(true);
  };

  return (
    <>
      <div className="container">
        <Banner displayText={formSubmitted} formData={formData} />
        <div className="content">
          {formSubmitted ? (
            <>
              <Destination />
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
