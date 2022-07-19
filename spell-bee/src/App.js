import './App.css';

function App() {

  // componentDidMount(){

    fetch('http://localhost:3005/search')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })

      // this fetch may break if this is not a proxy server in the package.json the proxy is set to localhost:5000 and may not work in production.

  // }

  return (
    <div className="App">

      <p>Spell Bee</p>

    </div>
  );
}

export default App;
