import logo from './logo.svg';
import './App.css';

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