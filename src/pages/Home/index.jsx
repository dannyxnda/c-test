import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/counter">Counter</Link>
      <Link to="/table">Table</Link>
    </div>
  )
}

export default Home
