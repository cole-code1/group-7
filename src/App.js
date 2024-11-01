import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Lists from "./components/Lists";


function App() {
  const list=["apples", "oranges", "bananas"]
  

  

  return (
    <div className="App">
      <Header/>
      <Lists list={list} />
      <Leaderboard   />
    </div>
  );
}

export default App;