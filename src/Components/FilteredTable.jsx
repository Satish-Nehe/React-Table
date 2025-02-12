import { useMemo } from "react";
import { COLUMNS, GROUPED_COLUMNS } from "./COLUMNS";
import MOCK_DATA from "./MOCK_DATA.json";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import GlobalFilter from "./GlobalFilter";

function FilteredTable() {
  const columns = useMemo(() => (COLUMNS), []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  },useFilters,useGlobalFilter,useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const {globalFilter} = state;

  return (
    <>
     <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "⬆️" : "⬇️") : ""}
                  </span>
                  <div>
                    {column.canFilter ? column.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FilteredTable;
