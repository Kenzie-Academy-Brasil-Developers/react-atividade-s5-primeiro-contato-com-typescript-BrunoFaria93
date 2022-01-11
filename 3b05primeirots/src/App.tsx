import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';

function App() {

  interface User {
    name: string,
    hobby: string,
    age: number
  }

  const [ list, setList ] = useState<User[]> ([])
  const [ user, setUser ] = useState<User>({} as User)
  const [ name, setName ] = useState<string>('')
  const [ hobby, setHobby] = useState<string>('')
  const [ age, setAge ] = useState<number>(0)

  const handleSubmit = (name: string, hobby: string, age: number) => {
    const user = {name, hobby, age}
    setList([...list, user])
    setUser(user)
  }

  return (
    <main className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Input placeholder='Nome' onChange={(e) => setName(e.target.value) }/>
        <Input placeholder='Hobby' onChange={(e) => setHobby(e.target.value) }/>
        <Input placeholder='Age' onChange={(e) => setAge(Number(e.target.value)) }/>

        <button onClick={() => handleSubmit(name, hobby, age)}>Adicionar</button>

        <ul>
          {list.map(user => <li key={user.name}>
            <Card name={user.name} age={user.age} hobby={user.hobby} />
          </li>)}
        </ul>
        
    </main>
  );
}

export default App;
