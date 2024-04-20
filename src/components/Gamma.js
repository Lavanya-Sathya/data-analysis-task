// Component to display Gamma Table
import { useEffect, useState } from "react";
import dataset from "../utils/Wine-Data";
import TableComponent from "./TableComponent";

const Gamma = () => {
  // function to calculate gamma
  //   and create an object having array of gamma elements
  const [classBasedGammaData, setClassBasedGammaData] = useState({});
  useEffect(() => {
    let gammaData = {};
    dataset.map((element) => {
      const { Alcohol, Ash, Hue, Magnesium } = element;
      if (!gammaData[Alcohol]) {
        gammaData[Alcohol] = [];
      }
      const gamma = Number(((Ash * Hue) / Magnesium).toFixed(3));
      if (!isNaN(gamma)) {
        gammaData[Alcohol].push(gamma);
      }
    });
    setClassBasedGammaData(gammaData);
  }, [dataset]);

  return <TableComponent data={classBasedGammaData} name={"Gamma"} />;
};
export default Gamma;
