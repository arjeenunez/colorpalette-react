import React from "react";

function PaletteFooter({name, emoji}) {
    return (
        <footer className="Palette-footer">
            {name}
            <span className="emoji">{ emoji }</span>
        </footer>
    )
}

export default PaletteFooter;