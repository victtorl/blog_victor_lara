import { Routes, Route, Link,NavLink } from "react-router-dom";
import Navbar from "./components/content/navbar/Navbar";
import RouterComponent from './components/routercomponent/RouterComponent';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterComponent />
    </div>
  );
}

export default App;
