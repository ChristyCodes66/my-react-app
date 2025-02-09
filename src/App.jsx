import './App.css'
import MyButton from './MyButton'
import { useState, useEffect } from 'react';

const user = 'Alex';
const items = ['Apples', 'Bananas', 'Cherries'];

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [data, setData] = useState(null);

  // return (
    // <>
    //   <h1>Welcome to my React App!</h1>
    //   <MyButton label={'Click Me'}/>
    //   <h1>Hello, {user}!</h1>
    //   <p>The year is currently {new Date().getFullYear()}.</p>
    //   <div>
    //     <h1>Counter: {count}</h1>
    //     <button onClick={() => setCount(count +1)}>Increase</button>
    //   </div>
    //   <div>
    //     <MyButton label='Press Me'/>
    //     <MyButton label={'Don\'t press me'} />
    //   </div>
    //   <div>
    //     <ul>
    //       {items.map((item, index) => (
    //         <li key={index}>{item}</li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div>
    //     <button onClick={() => setShow(!show)}>
    //       {show ? "Hide" : "Show"} Message
    //     </button>
    //     {show && <p>This is a secret message!</p>}
    //   </div>
    //   <div>
        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => setData(json))
        }, []);

        return <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </div>
  //   </>
  // );
}

export default App
