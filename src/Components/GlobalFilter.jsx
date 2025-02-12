import { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined)
  }, 1000);
  return (
    <>
    <span style={{display : "flex", alignItems : "center", justifyContent : "center", marginBottom : "20px"}}>
      Search : {""}
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      </span>
    </>
  );
}

export default GlobalFilter;
