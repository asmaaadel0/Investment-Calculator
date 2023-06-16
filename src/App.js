import React, { useState } from "react";

import TheHeader from "./component/layout/TheHeader";
import TheResult from "./component/Investment-Calculator/TheResult";
import Calculator from "./component/Investment-Calculator/Calculator";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <TheHeader />
      <Calculator onCalculate={calculateHandler} />{" "}
      {!userInput && (
        <p style={{ textAlign: "center" }}> No investment calculated yet. </p>
      )}{" "}
      {userInput && (
        <TheResult
          data={yearlyData}
          initialInvestment={userInput["current-saving"]}
        />
      )}{" "}
    </div>
  );
}

export default App;
