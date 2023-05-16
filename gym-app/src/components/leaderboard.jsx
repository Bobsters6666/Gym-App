import React, { useEffect, useState } from 'react';
import '../leaderboard.css';
import OnerepmaxDetails from './OnerepmaxDetails';

export default function Test() {
  const [onerepmaxes, setOnerepmaxes] = useState(null);
  const ranking = []
  let currentRanking = 1;
  const username = []
  const lifts = [];
  const reps = [];
  const weights = [];

  // Fetches data from backend
  useEffect(() => {
    const fetchOnerepmaxes = async () => {
      const response = await fetch('/api');
      const json = await response.json();

      if (response.ok) {
        setOnerepmaxes(json);
      }
    };

    fetchOnerepmaxes();
  }, []);

  // Populate separate arrays for each column
  if (onerepmaxes) {
    onerepmaxes.forEach((onerepmax) => {
      ranking.push('#'+currentRanking)
      username.push(onerepmax.username)
      lifts.push(onerepmax.lift);
      reps.push(onerepmax.reps);
      weights.push(onerepmax.weight);

      currentRanking += 1
    });
  }

  return (
    <div className="leaderboard-container">
      <h1>Leaderboards</h1>
      <div className="leaderboard">

        <div className="leaderboard-row">

          <div className="leaderboard-column">
            <h4>Rankings</h4>
            {ranking.map((username, index) => (
              <p className="user" key={index}>{username}</p>
            ))}
          </div>

          <div className="leaderboard-column">
            <h4>User</h4>
            
            {username.map((username, index) => (
              <p className="user" key={index}>{username}</p>
            ))}
          </div>

          <div className="leaderboard-column">
            <h4>Lifts</h4>
            {lifts.map((lift, index) => (
              <p key={index}>{lift}</p>
            ))}
          </div>

          <div className="leaderboard-column">
            <h4>Weight</h4>
            {weights.map((weight, index) => (
              <p key={index}>{weight}</p>
            ))}
          </div>

          <div className="leaderboard-column">
            <h4>Reps</h4>
            {reps.map((rep, index) => (
              <p key={index}>{rep}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="leaderboard">
        <div className="">
          {onerepmaxes && onerepmaxes.map((onerepmax) => (
            <OnerepmaxDetails key={onerepmax._id} onerepmax = {onerepmax}/>
          ))}
          
        </div>
      </div>

    </div>
  );
}