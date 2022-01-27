import { breakpoint, data, tableHeader, width } from "./constannt";
import PageWrapper from "../components/page-wrapper";
import Table from "../components/page-wrapper/table";
import TableHead from "../components/table-head";
import Cell from "../components/table-cell";
const ResponsiveTable = () => {
  return (
    <>
      <PageWrapper>
        <div className="desc-box">
          <strong>
            the <span style={{ color: "blue" }}>blue</span> border shows a width
            of "div.container", full width following breakpoints:
          </strong>
          <ul>
            {breakpoint.map((item) => (
              <li key={item.id}>{item.breakpoint}</li>
            ))}
          </ul>
          <strong>table cell width is set following each breakpoint:</strong>
          <ul>
            {width.map((item) => (
              <li key={item.id}>{item.width}</li>
            ))}
          </ul>
        </div>

        <Table>
          <TableHead>
            <tr>
              {tableHeader.map((header) => (
                <Cell scope="col">{header.title}</Cell>
              ))}
            </tr>
          </TableHead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <Cell>{item.id}</Cell>
                <Cell>{item.name}</Cell>
                <Cell>{item.farm}</Cell>
                <Cell>{item.tel}</Cell>
              </tr>
            ))}
          </tbody>
        </Table>
      </PageWrapper>
    </>
  );
};

export default ResponsiveTable;
