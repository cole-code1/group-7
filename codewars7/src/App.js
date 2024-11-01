
import Question1 from "./Components/Question1"
import Question2 from "./Components/Question2"

function App() {
  const list=["apples", "oranges", "bananas"]
  

  const leaders= ['Sch3lp', 'nplus']

  return (
    <div className="App">
      <Question1 list={list} />
      <Question2 leaders={leaders}  />
    </div>
  );
}

export default App;
