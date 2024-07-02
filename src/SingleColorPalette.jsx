import React, { Component, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Seedpalette from "./Seedpalette";
import generatePalette from "./Colorhelper";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { styled } from "@mui/material/styles";

const SinglePaletteComponent = styled("div")`
    height: 100vh;
    overflow: hidden;
`;

const PaletteColorsComponent = styled('div')`
     height: 90%;
`;

const BackButtonComponent = styled('p')`
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin: -15px 0 0 -50px;
    padding: 0;
    text-align: center;
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    line-height: 30px;
    color: white;
    text-transform: uppercase;
    border: none;
    opacity: 1;
`;

const GoBackComponent = styled('div')`
    background-color: black;
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
`;

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