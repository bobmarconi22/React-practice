import { useState, useEffect } from "react";

function Baseball() {

    const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024&standingsTypes=regularSeason"
        );
        if (!response.ok) {
          throw new Error("Failed Network Response: " + response.statusText);
        }
         const mlbData = await response.json();

         setData(mlbData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);

  return ( data &&
    <>
      <p>{data}</p>
    </>
  );
}

export default Baseball;
