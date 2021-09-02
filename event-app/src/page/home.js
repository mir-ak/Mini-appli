import logo from '../logo.svg';
import './home.css';
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pour créer votre evenement
        </p>
          <NavLink
          className="App-link"
          to='/about'
          exact>
          cliquez ici
        </NavLink> 
      </header>
    </div>
  );
}
export default App;
