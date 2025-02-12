import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Components/Table'
import SortedTable from './Components/SortedTable'
import FilteredTable from './Components/FilteredTable'
import "regenerator-runtime/runtime";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Table /> */}
      {/* <SortedTable /> */}
      <FilteredTable />
    </>
  )
}

export default App
