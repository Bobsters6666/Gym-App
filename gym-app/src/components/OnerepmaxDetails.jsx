import '../leaderboard.css';

const onerepmaxDetails = ({ onerepmax }) => {
  return (
    <div className="onerepmax-details">
      <p>{onerepmax.username}</p>
      <p>{onerepmax.lift}</p>
      <p>{onerepmax.weight}</p>
      <p>{onerepmax.reps}</p>
      <p>{onerepmax.max}</p>

    </div>
  )
}

export default onerepmaxDetails