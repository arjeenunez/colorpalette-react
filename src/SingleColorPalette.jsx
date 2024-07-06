import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Colorbox from './Colorbox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import { SinglePaletteComponent, PaletteColorsComponent, BackButtonComponent, GoBackComponent } from './styles/SingleColorPaletteStyles';

function SingleColorPalette({ format, changeFormat, singlePalette, colors, handleFormatChange }) {
    const Navigate = useNavigate();

    const colorBoxes = colors.map((color, idx) => <Colorbox key={color.name} name={color.name} id={color.id} format={color[format]} showLink={false} />);

    return (
        <SinglePaletteComponent>
            <Navbar changeFormat={changeFormat} format={format} handleFormatChange={handleFormatChange} />
            <PaletteColorsComponent>
                {colorBoxes}
                <GoBackComponent>
                    <BackButtonComponent onClick={() => Navigate(-1)}>Go Back</BackButtonComponent>
                </GoBackComponent>
            </PaletteColorsComponent>
            <PaletteFooter name={singlePalette.paletteName} emoji={singlePalette.emoji} />
        </SinglePaletteComponent>
    );
}

export default SingleColorPalette;
