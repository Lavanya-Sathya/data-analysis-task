// Component to display Flavanoid Table
import { useEffect, useState } from "react";
import dataset from "../utils/Wine-Data";
import TableComponent from "./TableComponent";

const FlavanoidTable = () => {
  const [classBasedflavanoidsData, setclassBasedflavanoidsData] = useState({});
  // Retriving flavanoid data and alcohol class into an object
  useEffect(() => {
    let flavanoidData = {};
    dataset.map((val) => {
      const { Alcohol, Flavanoids } = val;
      if (!flavanoidData[Alcohol]) {
        flavanoidData[Alcohol] = [];
      }
      const flav = Number(Flavanoids);
      if (!isNaN(flav)) {
        flavanoidData[Alcohol].push(flav);
      }
    });
    setclassBasedflavanoidsData(flavanoidData);
  }, [dataset]);

  return <TableComponent data={classBasedflavanoidsData} name={"Flavanoid"} />;
};
export default FlavanoidTable;
