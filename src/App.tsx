import React from 'react';
import Greetings from './prac/Greetings'
import Counter from './prac/Counter'
import MyForm from './prac/MyForm'
import Counter2 from './prac/Counter2'
import ReducerSample from './prac/ReducerSample'

// function App() {
const App: React.FC = () => {
  const onClick = (name : string) => {
    console.log(`${name} says hello`)
  }
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form)
  }
  return (
  <div>
    <Greetings name="Hello" onClick={onClick}/>
    <Counter />
    <MyForm onSubmit={onSubmit} />
    <Counter2 />
    <ReducerSample />
  </div>
  );
}

export default App;
