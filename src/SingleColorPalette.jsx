import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import {
    SinglePaletteComponent,
    PaletteColorsComponent,
    BackButtonComponent,
    GoBackComponent
} from "./styles/SingleColorPaletteStyles";


function SingleColorPalette() {

    const [format, updateFormat] = useState("hex");
    function changeFormat(newFormat) {
        updateFormat(newFormat);
    };
    
    const Navigate = useNavigate();

    const { paletteId, colorId } = useParams();
    const newPalette = generatePalette(Seedpalette.filter(el => el.id === paletteId)[0]);
    const colors = [];
    for (const color in newPalette.colors) {
        if (color === "50") continue;
        colors.push(newPalette.colors[color].filter(el => el.id === colorId)[0]);
    }

    const colorBoxes = colors.map((color, idx) => (
        <Colorbox key={color.name} name={color.name} id={color.id} format={color[format]} showLink={false} />
    ));

    return (
        <SinglePaletteComponent>
            <Navbar changeFormat={changeFormat} />
            <PaletteColorsComponent>
                {colorBoxes}
                <GoBackComponent>
                    <BackButtonComponent onClick={() => Navigate(-1)}>Go Back</BackButtonComponent>
                </GoBackComponent>
            </PaletteColorsComponent>
            <PaletteFooter name={newPalette.paletteName} emoji={newPalette.emoji} />
        </SinglePaletteComponent>
        
    )
}

export default SingleColorPalette;