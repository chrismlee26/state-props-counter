
import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Counter label="Apples" value="3" />
      <Counter label="Banana" value="13" />
      <Counter label="Orange" value="2" />
    </div>
  );
}

export default App;
