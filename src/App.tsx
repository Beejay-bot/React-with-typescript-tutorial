import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List  from './components/List'

export interface IState{
  people:{
    name: string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {
  const [people, setpeople] = useState<IState["people"]>([
    {
      name : "Neymar",
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Feverythingbarca.com%2F2021%2F04%2F12%2Fbarcelona-players-lobbying-return-neymar%2F&psig=AOvVaw2AEqHaGeJBf4wmgWoXu7EV&ust=1625095958955000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKCd7baAvvECFQAAAAAdAAAAABAD',
      age: 30,
      note:' Allergic to staying on the same team'
    }
  ])

  return (
    <div className="App">
      <h1>People I want to invite to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setpeople}/>
    </div>
  );
}

export default App;
