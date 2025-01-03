import { useState, useEffect } from "react";

function Baseball() {

    const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://"
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
