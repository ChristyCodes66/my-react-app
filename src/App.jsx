import './App.css'
import MyButton from './MyButton'
import { useState } from 'react';

const user = 'Alex';
const items = ['Apples', 'Bananas', 'Cherries'];

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Welcome to my React App!</h1>
      <MyButton label={'Click Me'}/>
      <h1>Hello, {user}!</h1>
      <p>The year is currently {new Date().getFullYear()}.</p>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count +1)}>Increase</button>
      </div>
      <div>
        <MyButton label='Press Me'/>
        <MyButton label={'Don\'t press me'} />
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} Message
        </button>
        {show && <p>This is a secret message!</p>}
      </div>
    </>
  );
}

export default App
