import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import { PaletteColorsComponent, PaletteComponent } from "./styles/PaletteStyles";

function Palette() {

    // Setting up states

    const [level, updateLevel] = useState(500);
    const [format, updateFormat] = useState("hex");
    
    function changeLevel(newLevel) {
        updateLevel(newLevel);
    }

    function changeFormat(newFormat) {
        updateFormat(newFormat);
    }

    // Generating colors

    const { id } = useParams();
    const [chosenPalette] = Seedpalette.filter(el => el.id === id);
    const palette = generatePalette(chosenPalette);
    const colors = palette.colors[level];

    const colorBoxes = colors.map((color, idx) => (
        <Colorbox key={color.id} name={color.name} format={color[format]} id={color.id} showLink={true} />
    ));
    
    return (
        <PaletteComponent>
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
            <PaletteColorsComponent>
                { colorBoxes }
            </PaletteColorsComponent>
            <PaletteFooter name={palette.paletteName} emoji={palette.emoji} />
        </PaletteComponent>
    )
}

export default Palette;