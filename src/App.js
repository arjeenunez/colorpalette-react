import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import { Route, Routes} from "react-router-dom"
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={Seedpalette}/>} />
        <Route exact path="/palette/new" element={<NewPaletteForm/>} />
        <Route exact path="palette/:id" element={<Palette/>} />
        <Route exact path="palette/:paletteId/:colorId" element={<SingleColorPalette/>} />
      </Routes>
    </div>
  );
}

export default App;