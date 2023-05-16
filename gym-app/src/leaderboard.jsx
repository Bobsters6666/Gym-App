import React, { useEffect, useState } from 'react'
import './leaderboard.css'

export default function test() {
  const [onerepmaxes, setOnerepmaxes] = useState(null)

  useEffect(() => {
    const fetchOnerepmaxes = async () => {
      const response = await fetch('/api')
      const json = await response.json()

      if (response.ok) {
        setOnerepmaxes(json)
      }
    }

    fetchOnerepmaxes()
  }, [])
    
  return (
    <div className="leaderboard-container">
      <h1>Leaderboards</h1>
      <div className="leaderboard-header-row">
        <h4 className="leaderboard-column">Lift</h4>
        <h4 className="leaderboard-column">Reps</h4>
        <h4 className="leaderboard-column">Weight</h4>
      </div>
      {onerepmaxes && onerepmaxes.map((onerepmax) => {
        return <div className="leaderboard-row"> 
        <p key={onerepmax._id}>{onerepmax.lift}</p> 
        <p key={onerepmax._id}>{onerepmax.weight}</p>  
        <p key={onerepmax._id}>{onerepmax.reps}</p>   
      </div>
      })}
    </div>
  )
}
