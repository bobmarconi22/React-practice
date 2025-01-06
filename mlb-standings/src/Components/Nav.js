import Baseball from "./MLB";
import { useEffect, useState } from "react";

function Navigation() {

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const [year, setYear] = useState(currentYear);
  const [toYear, setToYear] = useState(currentYear);
  const [showInput, setShowInput] = useState(false);
  const [sort, setSort] = useState('MLB')

  useEffect(() => {
  }, []);

  function handleYearChange() {
    setShowInput((prevShowInput) => !prevShowInput)
    setYear(toYear)
  }

  function handleSort() {
    if(sort === 'MLB'){
      setSort('League')
    }
    if(sort === 'League'){
      setSort('Division')
    }
    if(sort === 'Division'){
      setSort('MLB')
    }
  }
  return (
    <>
      {year && (
        <main>
          <h1>{year} MLB Standings</h1>
          <button onClick={handleSort}>{sort}</button>
          <Baseball year={`${2024}`} sort={sort}/>
        </main>
      )}
      {showInput && <input defaultValue={year} onChange={(e) => setToYear(e.target.value)}></input>}
      <br/>
      <button onClick={handleYearChange}>{showInput ? "Set Year" : "Change Year"}</button>
    </>
  );
}

export default Navigation;
