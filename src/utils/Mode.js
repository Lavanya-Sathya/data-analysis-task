// component to calculate mode
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";

const Mode = (props) => {
  const { data } = props;
  const [mode, setMode] = useState({});
  useEffect(() => {
    // create an array of Objects consisting of an element and it's count
    // find maximum count in each class
    let maxCountList = [];
    const modeObject = Object.values(data).map((element) => {
      const noOfReapeat = {};
      let count = 0;
      element.map((num) => {
        if (!noOfReapeat[num]) {
          noOfReapeat[num] = [];
        }
        noOfReapeat[num]++;
        count = Math.max(noOfReapeat[num], count);
      });
      maxCountList.push(count);
      return noOfReapeat;
    });

    // find all the elements that corresponds to maximum count and
    // obtain the array of mode values for each class
    let modeVal = {};
    const modeValRetrieve = modeObject.map((element, idx) => {
      Object.keys(element).forEach((val) => {
        if (element[val] === maxCountList[idx]) {
          if (!modeVal[idx]) {
            modeVal[idx] = [];
          }
          modeVal[idx].push(Number(val));
        }
      });
      if (modeVal[idx].length === Object.keys(element).length) {
        modeVal[idx] = [];
        modeVal[idx].push("No Mode Found");
      }
    });
    setMode(modeVal);
  }, [data]);

  return Object.values(mode).map((element, idx) => (
    <Table.Td key={idx}>{element.join(", ")}</Table.Td>
  ));
};
export default Mode;
