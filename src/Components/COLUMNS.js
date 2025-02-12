import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter : ColumnFilter,
    disableFilters : true
  },
  {
    Header: "First-Name",
    Footer: "First-Name",
    accessor: "first_name",
    Filter : ColumnFilter,
  },
  {
    Header: "Last-Name",
    Footer: "Last-Name",
    accessor: "last_name",
    Filter : ColumnFilter,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter : ColumnFilter,
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
    Filter : ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter : ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header:"Name",
    Footer:"Name",
    columns:[
        {
            Header: "First-Name",
            Footer: "First-Name",
            accessor: "first_name",
          },
          {
            Header: "Last-Name",
            Footer: "Last-Name",
            accessor: "last_name",
          }, 
    ]
  },
  {
    Header:"Info",
    Footer:"Info",
    columns:[
        {
            Header: "Email",
            Footer: "Email",
            accessor: "email",
          },
          {
            Header: "Gender",
            Footer: "Gender",
            accessor: "gender",
          },
          {
            Header: "Phone",
            Footer: "Phone",
            accessor: "phone",
          },
    ]
  }
];
