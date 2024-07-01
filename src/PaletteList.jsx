import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(el => (
                    <MiniPalette exact to={`/palette/${el.id}`} key={el.id} {...el} />
                ))}
            </div>
        )
    }
}

export default PaletteList;