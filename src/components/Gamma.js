// Component to display Gamma Table
import { useEffect, useState } from "react";
import dataset from "../utils/Wine-Data";
import Mean from "./Mean";
import Median from "./Median";
import Mode from "./Mode";
import { Loader, Table, Text, rem } from "@mantine/core";

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

  return classBasedGammaData ? (
    <>
      <div>
        <h2 className="tableHeading">Gamma Table</h2>
      </div>
      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="table-width tbl-wd">Measure</Table.Th>
            {/* display class dynamically */}
            {Object.keys(classBasedGammaData).map((element) => {
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
              <Text fw={500}> Gamma Mean</Text>
            </Table.Td>
            <Mean data={classBasedGammaData} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}> Gamma Median</Text>
            </Table.Td>
            <Median data={classBasedGammaData} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>Gamma Mode</Text>
            </Table.Td>
            <Mode data={classBasedGammaData} />
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  ) : (
    <Loader />
  );
};
export default Gamma;
