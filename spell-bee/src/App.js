import './App.css';

function App() {

    fetch('http://localhost:3005/search')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
  
  fetch('http://localhost:3005/audio')
    .then((res) => res.mp3())
    .then((music) => {
      console.log(music);
    })
  

  return (
    <div className="App">

      <p>Spell Bee</p>

    </div>
  );
}

export default App;
