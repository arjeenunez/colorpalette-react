import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";

function App() {
  return (
    <div className="App">
      {/* <Palette {...Seedpalette[4]} /> */}
      <Palette palette={generatePalette(Seedpalette[1])} />
    </div>
  );
}

export default App;