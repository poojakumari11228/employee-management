import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> WAA 2nd Exam </h1>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
