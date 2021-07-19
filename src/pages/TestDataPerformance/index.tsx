import { useContext } from "react";
import AppContext from "../../context/AppContext";

export interface IPerfomance {
  profilerId: string,
  mode: string,
  actualTime: number,
  baseTime: number,
  startTime: number,
  commitTime: number
}

const TestDataPerformance = () => {
  const { items } = useContext(AppContext);
  console.log(items);

  return (
    <h1>Test Data Performance Page</h1>
  );

};

export default TestDataPerformance;
