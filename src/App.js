import Palette from "./Palette";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>It workts - root</h1>} />
        <Route exact path="/:id" element={ <h1>It works - individual route</h1>} />
      </Routes>
      {/* <Palette palette={generatePalette(Seedpalette[4])} /> */}
    </div>
  );
}

export default App;