import { useEffect, useState } from "react";

function Baseball({ year, sort }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=${year}&standingsTypes=regularSeason`
        );
        const mlbData = await res.json();
        setData(mlbData);
        console.log(mlbData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [year]);

  function findDiv(id) {
    return data.records.filter((x) => x.division.id === id)[0].teamRecords;
  }

  return (
    data &&
    ((sort === "MLB" && (
      <>
        <h2>MLB</h2>
      </>
    )) ||
      (sort === "League" && (
        <>
          <h2>National League</h2>
          <h2>American League</h2>
        </>
      )) ||
      (sort === "Division" && (
        <>
          <div className="League">
            <h2>National League</h2> {/* League id : 104 */}
            <h3>East</h3> {/* Div id : 204 */}
            {findDiv(204).map((x, index) => (
              <div key={index}>
                <p>
                  {x.team.name} {x.gamesPlayed} {x.wins} {x.losses} {x.wins}{" "}
                  {x.wins}
                </p>
              </div>
            ))}
            <h3>Central</h3> {/* id : 205 */}
            <h3>West</h3> {/* id : 203 */}
          </div>
          <h2>American League</h2> {/*} League id : 103 */}
          <h3>East</h3> {/* Div id : 201 */}
          <h3>Central</h3> {/* id : 202 */}
          <h3>West</h3> {/* id : 200 */}
        </>
      )))
  );
}

export default Baseball;
