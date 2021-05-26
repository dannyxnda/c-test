import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import PageContainer from '../../components/PageContainer'

const Home = () => {
  const history = useHistory()

  return (
    <PageContainer>
      <div
        style={{
          width: 'clamp(600px, 80%, 1000px',
          margin: 'auto',
          marginBottom: 10,
        }}
      >
        <Button variant="contained" onClick={() => history.push('/count')}>
          Count
        </Button>
        <Button
          variant="contained"
          onClick={() => history.push('/table')}
          style={{ marginLeft: 8 }}
        >
          Table
        </Button>
      </div>
    </PageContainer>
  )
}

export default Home
