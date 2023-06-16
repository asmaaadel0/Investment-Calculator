import React, { useState } from "react";

import TheHeader from "./component/layout/TheHeader";
import TheResult from "./component/Investment-Calculator/TheResult";
import Calculator from "./component/Investment-Calculator/Calculator";

function App() {
  const [yearlyData, setYearlyData] = useState("");
  const submitData = (yearlyData) => {
    setYearlyData(yearlyData);
  };
  return (
    <div>
      <TheHeader />
      <Calculator onSubmitData={submitData} />{" "}
      {/* Todo: Show below table conditionally (only once result data is available) */}{" "}
      {/* Show fallback text if no data is available */}{" "}
      <TheResult yearlyData={yearlyData} />{" "}
    </div>
  );
}

export default App;
