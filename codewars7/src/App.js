import './App.css';
import Demo from './components/Create';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

function App() {
  const leaders= ['jhoffner','GiacomoSorbi','ZozoFouchtra']
  return (
    <div className="App">
      <Demo />
      <Header />
      <h1>Leaderboard</h1>
      <Leaderboard leaders={leaders} />
      
    </div>
  );
}

export default App;
