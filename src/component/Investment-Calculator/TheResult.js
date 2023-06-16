import React from "react";

import "./TheResult.css";

const TheResult = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th> Year </th> <th> Total Savings </th> <th> Interest(Year) </th>{" "}
            <th> Total Interest </th> <th> Invested Capital </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          <tr>
            <td> {props.yearlyData.year} </td>{" "}
            <td> {props.yearlyData.savingsEndOfYear} </td>{" "}
            <td> {props.yearlyData.yearlyInterest} </td>{" "}
            <td> {props.yearlyData.yearlyContribution} </td>{" "}
            <td> TOTAL INVESTED CAPITAL </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default TheResult;
