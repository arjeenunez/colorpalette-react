import React, { useState } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { PaletteColorsComponent, PaletteComponent } from "./styles/PaletteStyles";

function Palette({ palette, changeLevel, level, format, changeFormat, open, closeSnackBar, handleFormatChange }) {

    const colors = palette.colors[level];

    const colorBoxes = colors.map((color, idx) => (
        <Colorbox key={color.id} name={color.name} format={color[format]} id={color.id} showLink={true} />
    ));
    
    return (
        <PaletteComponent>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                handleFormatChange={handleFormatChange}
                open={open}
                closeSnackBar={closeSnackBar}
                format={format}
            />
            <PaletteColorsComponent>
                { colorBoxes }
            </PaletteColorsComponent>
            <PaletteFooter name={palette.paletteName} emoji={palette.emoji} />
        </PaletteComponent>
    )
}

export default Palette;