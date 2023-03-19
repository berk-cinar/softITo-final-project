import logo from './logo.svg';
import './App.css';
import GrandmaComponent from './context/GrandmaComponent';
import { SituationInside } from './context/SituationInside';
import { SituationOutside } from './context/SituationOutside';
import { ApplicationRoutes } from './routing/application/ApplicationRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ApplicationRoutes/>
      </header>
    </div>
  );
}

export default App;