import './App.css'
import MyButton from './MyButton'

const user = 'Alex';

function App() {
  return (
    <>
      <h1>Welcome to my React App!</h1>
      <MyButton />
      <h1>Hello, {user}!</h1>
      <p>The year is currently {new Date().getFullYear()}.</p>
    </>
  )
}

export default App
