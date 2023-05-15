import React, { useEffect, useState } from 'react'

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
    <div>
      <p>hello</p>
      <div className="onerepmax">
        {onerepmaxes && onerepmaxes.map((onerepmax) => {
          return <p key={onerepmax._id}>{onerepmax.lift}</p>  
        })}
      </div>
    </div>
  )
}
