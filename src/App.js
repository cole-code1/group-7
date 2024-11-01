import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Lists from "./components/Lists";


function App() {
  const list=["apples", "oranges", "bananas"]
  

  const leaders= ['Sch3lp', 'nplus']

  return (
    <div className="App">
      <Header/>
      <Lists list={list} />
      <Leaderboard leaders={leaders}  />
    </div>
  );
}

export default App;