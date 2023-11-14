import './App.css';
import Navbar from './Components/Navbar';
import Body_2 from './Components/Body_2';
import { useGlobalNightModeContext } from './Context/ContextBody';
import Footer from './Components/Footer';

function App() {
  const {color} = useGlobalNightModeContext();

  return (
    <div className="App" style={{backgroundColor : `${color["bg"]}`, color : `${color["tc"]}`}}>
      <Navbar />
      <Body_2 />
      <Footer />
    </div>
  );
}

export default App;
