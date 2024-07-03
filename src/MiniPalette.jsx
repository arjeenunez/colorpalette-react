import React from "react";
import { useNavigate } from "react-router-dom";
import { Root, Colors, Title, Emoji, Minicolorboxes } from "./styles/MiniPaletteStyles";

function MiniPalette({ paletteName: name, colors, emoji, id }) {
    const Navigate = useNavigate();
    const miniColorBoxes = colors.map(color => (
        <Minicolorboxes backgroundColor={color.color} key={color.name}></Minicolorboxes>
    ))
    const handleClick = () => Navigate(`/palette/${id}`);
    return (
        <Root onClick={handleClick}>
            <Colors>
                { miniColorBoxes }
            </Colors>
            <Title>{name} <Emoji>{emoji}</Emoji></Title>
        </Root>
    )
}

export default MiniPalette;