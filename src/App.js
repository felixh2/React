
import Navbar from './navbasr';
import Home from './home';

function App() {
  const v = "Hello fellow";
  return (   
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <p>##{v}##</p> */}
    
      </div>
    </div>
  );
}

export default App;
