import { useState } from 'react'
import Button from '@material-ui/core/Button'

import PageContainer from '../../components/PageContainer'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <PageContainer>
      <div style={{ width: 'clamp(600px, 80%, 1000px', margin: 'auto' }}>
        <h1>{count}</h1>
        <Button color="primary" onClick={() => setCount((c) => c + 1)}>
          Increase 1
        </Button>
        <Button color="primary" onClick={() => setCount(0)}>
          Reset to 0
        </Button>
      </div>
    </PageContainer>
  )
}

export default Count
