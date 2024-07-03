import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import { Route, Routes, useParams } from "react-router-dom"
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

function App() {
  function PaletteRoute() {
    const { id } = useParams();
    const [chosenPalette] = Seedpalette.filter(el => el.id === id);
    return (
      <Palette palette={generatePalette(chosenPalette)} />
    )
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={Seedpalette}/>} />
        {/* <Route exact path="palette/:id" element={<PaletteRoute />} /> */}
        <Route exact path="palette/:id" element={<Palette/>} />
        <Route exact path="palette/:paletteId/:colorId" element={<SingleColorPalette/>} />
      </Routes>
    </div>
  );
}

export default App;