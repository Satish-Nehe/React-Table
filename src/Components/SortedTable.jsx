import { useMemo } from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./COLUMNS";
import MOCK_DATA from "./MOCK_DATA.json";
import { useSortBy, useTable } from "react-table";
function SortedTable() {
  const columns = useMemo(() => (COLUMNS, GROUPED_COLUMNS), []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                  {columns.render("Header")}
                  <span>
                    {columns.isSorted ? (columns.isSortedDesc ? "⬆️" : "⬇️") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((columns)=>(
                    <th {...columns.getFooterProps()}>{columns.render("Footer")}</th>
                ))}
           
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
}
export default SortedTable;
