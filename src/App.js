import './App.css';
import Firstblock from './Components/first-block/Firstblock';
import Craft from './Components/Craft/Craft';
import Bubble from './Components/Bubble/Bubble';
import Connection from './Components/ConnectionPage/Connection';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
    <Firstblock></Firstblock>
    <Craft></Craft>
    <Bubble></Bubble>
    <Connection></Connection>
    <Footer></Footer>
    </div>
  );
}

export default App;
