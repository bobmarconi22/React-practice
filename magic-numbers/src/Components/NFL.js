import { useState, useEffect } from "react";

function Football() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "15cb755437msh31c68e0653f3a56p118288jsne7940eb0c26b",
          "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
        },
      };
      try {
        const res = await fetch(url, options);
        const mlbData = await res.json();
        console.log(mlbData)

        setData(mlbData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    data && (
      <>
        <p>Football</p>
      </>
    )
  );
}

export default Football;
