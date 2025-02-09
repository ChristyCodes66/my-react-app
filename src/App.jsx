import './App.css'
import MyButton from './MyButton'
import { useState } from 'react';

const user = 'Alex';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome to my React App!</h1>
      <MyButton />
      <h1>Hello, {user}!</h1>
      <p>The year is currently {new Date().getFullYear()}.</p>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count +1)}>Increase</button>
      </div>
    </>
  )
}

export default App
