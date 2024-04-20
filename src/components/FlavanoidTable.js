// Component to display Flavanoid Table
import { useEffect, useState } from "react";
import dataset from "../utils/Wine-Data";
import Mean from "./Mean";
import Median from "./Median";
import Mode from "./Mode";
import { Loader, Table, Text } from "@mantine/core";
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

  return classBasedflavanoidsData ? (
    <>
      <div>
        <h2 className="tableHeading">Flavanoid Table</h2>
      </div>
      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="table-width tbl-wd">Measure</Table.Th>
            {Object.keys(classBasedflavanoidsData).map((element) => {
              return (
                <Table.Th className="table-width" key={element}>
                  Class {element}
                </Table.Th>
              );
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>Flavanoid Mean</Text>
            </Table.Td>
            <Mean data={classBasedflavanoidsData} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>Flavanoid Median</Text>
            </Table.Td>
            <Median data={classBasedflavanoidsData} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>Flavanoid Mode</Text>
            </Table.Td>
            <Mode data={classBasedflavanoidsData} />
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  ) : (
    <Loader />
  );
};
export default FlavanoidTable;
