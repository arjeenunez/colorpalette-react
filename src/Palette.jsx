import React, { Component } from "react";
import Colorbox from "./Colorbox";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./Palette.css";

class Palette extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const palette = this.props;
        const colorBoxes = palette.colors.map((color, idx) => (
            <Colorbox key={idx} background={color} />
        ));
        return (
            <div className="Palette">
                {/* Navbar */}
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;