import './App.css';

function App() {

  // componentDidMount(){

    fetch('http://localhost:3000/search')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })

  // }

  return (
    <div className="App">

      <p>Spell Bee</p>



    </div>
  );
}

export default App;
