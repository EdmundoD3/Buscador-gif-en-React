import React, {useState, useEffect} from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';



function App() {
  const [gifs, setgifs] = useState([])
  useEffect(()=>{
    console.log("actualizando gifs")
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
      })
  },[])

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="panda"/>
      </section>
    </div>
  );
}

export default App;
