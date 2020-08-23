import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const job = ['Web Designer', 'Web Developer']
  const nayoks = [{name:'Shakib', age:'20'}, {name:'Siam', age:'25'}, {name:'Sumon', age:'30'}, {name:'Shuvo',  age:'35'}]
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      {
        users.map(nk => <MaleNayok name={nk.name} key={nk.id} email={nk.email}></MaleNayok> )
      }
      {/* {
        nayoks.map(nk => <MaleNayok name={nk.name} age={nk.age}></MaleNayok> )
      } */}
      <MovieCounter></MovieCounter>
      <Nayok name={job[0]}></Nayok>
      <Nayok></Nayok>
      <Nayok name={job[1]}></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MaleNayok(props){
  const MaleNayokStyle = {
    border: '2px solid purple',
    marin: '20px'
  }
  return (
    <div style = {MaleNayokStyle}>
      <h1>Ami nayok {props.name}</h1>
      <h1>Amr boyosh {props.age}</h1>
    </div>
  )
}

function MovieCounter() {
  const [count, setCount] =  useState(5);
  return (
    <div>
      <button onClick = {() => setCount(count + 1)}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieAct movies = {count}></MovieAct>
      <MovieAct movies = {count+10}></MovieAct>
      <MovieAct movies = {count+100}></MovieAct>
    </div>
  )
}

function MovieAct(props){
return <h4>Movie I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    marin: '20px'
  }
  return (
  <div style = {nayokStyle}>
    <h1>Tayab Pabel {props.name}</h1>
    <h3>Web Developer</h3>
  </div>
  )
}

export default App;
