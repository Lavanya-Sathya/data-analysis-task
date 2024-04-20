// component to calculate Median
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";

const Median = (props) => {
  const { data } = props;
  const [median, setMedian] = useState([]);
  useEffect(() => {
    // Calculate median based on the length of each class elements
    const medianVal = Object.values(data).map((element) => {
      const sort = element.sort((a, b) => a - b);
      const len = sort.length;
      if (len % 2 !== 0) {
        // return this if the length of the array is odd
        return sort[(len - 1) / 2];
      } else {
        // return this if the length of the array is even
        const med = (sort[len / 2 - 1] + sort[len / 2]) / 2;
        return med;
      }
    });
    setMedian(medianVal);
  }, [data]);

  return median.map((val) => <Table.Td key={val}>{val}</Table.Td>);
};
export default Median;
