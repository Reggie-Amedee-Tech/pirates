
import DetailedPirateView from './views/DetailedPirateView';
import UpdatePirate from './views/UpdatePirate'
import CreatePiratePage from './views/CreatePiratePage'
import Main from './views/Main'
import { Router } from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CreatePiratePage path="/create"/>
        <Main path="/all" />
        <DetailedPirateView path="/pirate/:id" />
        <UpdatePirate path="/pirate/:id/edit"/>
      </Router>

    </div>
  );
}

export default App;
