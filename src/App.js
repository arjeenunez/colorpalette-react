import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import { Route, Routes, useParams } from "react-router-dom"
import PaletteList from "./PaletteList";

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
        <Route exact path="palette/:id" element={<PaletteRoute/>} />
      </Routes>
      {/* <Palette palette={generatePalette(Seedpalette[4])} /> */}
    </div>
  );
}

export default App;