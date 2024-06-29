import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";

function App() {
  console.log(generatePalette(Seedpalette[4]))
  return (
    <div className="App">
      <Palette {...Seedpalette[4]} />
    </div>
  );
}

export default App;