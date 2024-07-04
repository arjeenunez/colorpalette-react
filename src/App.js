import { useState } from 'react';
import Palette from './Palette';
import Seedpalette from './Seedpalette';
import generatePalette from './Colorhelper';
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
    // Using states and related methods

    const [level, updateLevel] = useState(500);
    const [format, updateFormat] = useState('hex');
    const [open, toggleOpen] = useState(false);
    const [palettes, updatePalettes] = useState(Seedpalette);
    const changePalettes = newPalette => updatePalettes([...palettes, newPalette]);
    const changeLevel = newLevel => updateLevel(newLevel);
    const changeFormat = newFormat => updateFormat(newFormat);
    const closeSnackBar = evt => toggleOpen(false);
    const handleFormatChange = evt => {
        updateFormat(evt.target.value);
        changeFormat(evt.target.value);
        toggleOpen(true);
    };

    // Palette component with additional params hook

    const PaletteComponent = () => {
        const { id } = useParams();
        const [chosenPalette] = palettes.filter(el => el.id === id);
        const palette = generatePalette(chosenPalette);
        return <Palette palette={palette} level={level} changeLevel={changeLevel} format={format} changeFormat={changeFormat} open={open} closeSnackBar={closeSnackBar} handleFormatChange={handleFormatChange} />;
    };

    // Single palette component with additional params hook

    const SingleColorPaletteComponent = () => {
        const { paletteId, colorId } = useParams();
        const singlePalette = generatePalette(palettes.filter(el => el.id === paletteId)[0]);
        const colors = [];
        for (const color in singlePalette.colors) {
            if (color === '50') continue;
            colors.push(singlePalette.colors[color].filter(el => el.id === colorId)[0]);
        }
        return <SingleColorPalette format={format} changeFormat={changeFormat} singlePalette={singlePalette} colors={colors} handleFormatChange={handleFormatChange} />;
    };

    // Routes

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<PaletteList palettes={palettes} />} />
                <Route exact path="/palette/new" element={<NewPaletteForm changePalettes={changePalettes} />} />
                <Route exact path="palette/:id" element={<PaletteComponent />} />
                <Route exact path="palette/:paletteId/:colorId" element={<SingleColorPaletteComponent />} />
            </Routes>
        </div>
    );
}

export default App;
