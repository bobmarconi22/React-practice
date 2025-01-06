import Football from "./NFL";
import Baseball from "./MLB";
import Basketball from "./NBA";
import Hockey from "./NHL";
import { useEffect, useState } from "react";

function Navigation() {
  const [sport, setSport] = useState(null);

  useEffect(() => {
    setSport(null);
  }, []);

  function renderSport(){
    if(sport === 'NFL'){
        return <Football />
    }
     else if(sport === 'MLB'){
        return <Baseball />
    }
    else if(sport === 'NBA'){
        return <Basketball />
    }
    else if(sport === 'NHL'){
        return <Hockey />
    }
    else return null
}

  return (
    <>
      <nav>
        <button onClick={() => setSport("NFL")}>NFL</button>
        <button onClick={() => setSport("MLB")}>MLB</button>
        <button onClick={() => setSport("NBA")}>NBA</button>
        <button onClick={() => setSport("NHL")}>NHL</button>
      </nav>
      {sport && (
        <main>
          <h1>{sport} Standings</h1>
          {renderSport()}
        </main>
      )}
    </>
  );
}

export default Navigation;
