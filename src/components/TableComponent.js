// Component to display the table
import Mean from "../utils/Mean";
import Median from "../utils/Median";
import Mode from "../utils/Mode";
import { Loader, Table, Text } from "@mantine/core";

const TableComponent = (props) => {
  const { data, name } = props;
  return data ? (
    <>
      <div>
        <h2 className="tableHeading">{name} Table</h2>
      </div>
      <Table className="table">
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="table-width tbl-wd">Measure</Table.Th>
            {Object.keys(data).map((element) => {
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
              <Text fw={500}>{name} Mean</Text>
            </Table.Td>
            <Mean data={data} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>{name} Median</Text>
            </Table.Td>
            <Median data={data} />
          </Table.Tr>
          <Table.Tr>
            <Table.Td>
              <Text fw={500}>{name} Mode</Text>
            </Table.Td>
            <Mode data={data} />
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  ) : (
    <Loader />
  );
};
export default TableComponent;
