import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

function SingleColorPalette() {
    const [format, updateFormat] = useState("hex");
    function changeFormat(newFormat) {
        updateFormat(newFormat);
    };
    
    const { paletteId, colorId } = useParams();
    const newPalette = generatePalette(Seedpalette.filter(el => el.id === paletteId)[0]);
    const colorArray = [];
    for (const color in newPalette.colors) {
        colorArray.push(newPalette.colors[color].filter(el => el.id === colorId)[0]);
    }
    const colors = [...colorArray.slice(1)];
    const colorBoxes = colors.map((color, idx) => (
        <Colorbox key={color.id} name={color.name} id={color.id} format={color[format]} showLink={false} />
    ));
    return (
        <div className="Palette">
            <Navbar changeFormat={changeFormat} />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <PaletteFooter name={newPalette.paletteName} emoji={newPalette.emoji} />
        </div>
        
    )
}

export default SingleColorPalette;