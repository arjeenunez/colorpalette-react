import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import Colorbox from "./Colorbox";

function SingleColorPalette() {
    const { paletteId, colorId } = useParams();
    const newPalette = generatePalette(Seedpalette.filter(el => el.id === paletteId)[0]);
    const colorArray = [];
    for (const color in newPalette.colors) {
        colorArray.push(newPalette.colors[color].filter(el => el.id === colorId)[0]);
    }
    const colors = [...colorArray.slice(1)];
    const colorBoxes = colors.map((color, idx) => (
        <Colorbox key={color.id} name={color.name} id={color.id} format={color["hex"]} showLink={false} />
    ));
    return (
        <div className="Palette">
            <div>
                <h1>Yup</h1>
            </div>
            <div className="Palette-colors">
                {colorBoxes}
            </div>
        </div>
    )
}

export default SingleColorPalette;