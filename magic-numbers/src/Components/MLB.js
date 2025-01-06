import { useEffect, useState } from "react"

function Baseball() {
    const [data,setData] = useState[null]


    useEffect(() =>{
        try{
            const res = fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024&standingsTypes=regularSeason")
            const mlbData = res.json()
            setData(mlbData)
            console.log(mlbData)
        } catch (error) {
            console.error(error)
        }
    })
    return( data &&
        <>
        baseball
        </>
    )
}

export default Baseball
