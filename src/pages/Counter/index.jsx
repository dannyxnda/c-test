import { useState } from 'react'
import { Link } from 'react-router-dom'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increase 1
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset to 0
      </button>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default Counter
