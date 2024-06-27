import Palette from "./Palette";
import Seedpalette from "./Seedpalette"

function App() {
  return (
    <div className="App">
      <Palette {...Seedpalette[0]} />
    </div>
  );
}

export default App;
