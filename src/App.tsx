import { useState } from 'react'

function App() {
  const [useless, setUseless] = useState<number>(0)

  return (
    <div onClick={() => setUseless(useless + 1)}>{useless}</div>
  )
}

export default App
