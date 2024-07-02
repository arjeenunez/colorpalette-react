import React, { Component, useState } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";
import { styled } from "@mui/material/styles";

const PaletteComponent = styled("div")`
    height: 100vh;
    overflow: hidden;
`;

const PaletteColorsComponent = styled('div')`
     height: 90%;
`;

function Palette({ palette }) {
    const [level, updateLevel] = useState(500);
    const [format, updateFormat] = useState("hex");
    
    function changeLevel(newLevel) {
        updateLevel(newLevel);
    }

    function changeFormat(newFormat) {
        updateFormat(newFormat);
    }

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