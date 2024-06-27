import Palette from "./Palette";
import Seedpalette from "./Seedpalette"

function App() {
  return (
    <div className="App">
      <Palette palette={Seedpalette[4]} />
    </div>
  );
}

export default App;
