// component to calculate Mean

import { Table } from "@mantine/core";
import { useEffect, useState } from "react";

const Mean = (props) => {
  const { data } = props;
  const [mean, setMean] = useState([]);
  useEffect(() => {
    // calculate sum of elements using reduce and
    // divide  it by length of each class elements to obtain mean
    const meanData = Object.values(data).map((element) => {
      const sum = element.reduce((acc, curr) => {
        return (acc += curr);
      });
      return Number((sum / element.length).toFixed(3));
    });
    setMean(meanData);
  }, [data]);
  return mean.map((val) => <Table.Td key={val}>{val}</Table.Td>);
};

export default Mean;
