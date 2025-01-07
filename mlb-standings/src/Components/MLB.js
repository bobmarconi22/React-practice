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
          <table className="League">
            <thead>
              <tr>
                <th colSpan="6">
                  <h2>National League</h2>
                  {/* League id : 104 */}
                </th>
              </tr>
              <tr>
                <th className="table-team">Team</th>
                <th className="table-games">GP</th>
                <th className="table-percent">W%</th>
                <th className="table-wins">W</th>
                <th className="table-losses">L</th>
                <th className="table-streak"> </th>
              </tr>
              <tr>
                <th colSpan="6">
                  <h3>East</h3>
                  {/* Div id : 204 */}
                </th>
              </tr>
            </thead>
            <tbody>
              {findDiv(204).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>

                </tr>
              ))}
              </tbody>
              <th colSpan="6">
                <h3>Central</h3> {/* Div id : 205 */}
              </th>
              <tbody>
              {findDiv(205).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>

                </tr>
              ))}
              </tbody>
              <th colSpan="6">
                <h3>West</h3> {/* Div id : 203 */}
              </th>
              <tbody>
              {findDiv(203).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>

                </tr>
              ))}
              </tbody>
          </table>
          <table className="League">
          <thead>
              <tr>
                <th colSpan="6">
                  <h2>American League</h2>
                  {/* League id : 103 */}
                </th>
              </tr>
              <tr>
                <th className="table-team">Team</th>
                <th className="table-games">GP</th>
                <th className="table-percent">W%</th>
                <th className="table-wins">W</th>
                <th className="table-losses">L</th>
                <th className="table-streak"> </th>
              </tr>
              <tr>
                <th colSpan="6">
                  <h3>East</h3>
                  {/* Div id : 201 */}
                </th>
              </tr>
            </thead>
            <tbody>
              {findDiv(201).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>

                </tr>
              ))}
              </tbody>
              <th colSpan="6">
                <h3>Central</h3> {/* Div id : 202 */}
              </th>
              <tbody>
              {findDiv(202).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>

                </tr>
              ))}
              </tbody>
              <th colSpan="6">
                <h3>West</h3> {/* Div id : 200 */}
              </th>
              <tbody>
              {findDiv(200).map((x, index) => (
                <tr key={index}>
                  <td className="table-team">{x.team.name}</td>
                  <td className="table-games">{x.gamesPlayed}</td>
                  <td className="table-percent">{x.winningPercentage}</td>
                  <td className="table-wins">{x.wins}</td>
                  <td className="table-losses">{x.losses}</td>
                  <td className="table-streak">{x.streak.streakCode}</td>
                </tr>
              ))}
              </tbody>
            </table>
        </>
      )))
  );
}

export default Baseball;
