import React from "react";
import { PaletteFooterComponent, EmojiComponent } from "./styles/PaletteFooterStyles";

function PaletteFooter({name, emoji}) {
    return (
        <PaletteFooterComponent>
            {name}
            <EmojiComponent>{ emoji }</EmojiComponent>
        </PaletteFooterComponent>
    )
}

export default PaletteFooter;