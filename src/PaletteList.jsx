import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(el => (
                    <Link style={{display: "block"}} exact to={`/palette/${el.id}`} key={ el.id}>{el.paletteName}</Link>
                ))}
                <div>PaletteList</div>
            </div>
        )
    }
}

export default PaletteList;