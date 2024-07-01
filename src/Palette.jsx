import React, { Component, useState } from "react";
import Colorbox from "./Colorbox";
import "./Palette.css";
import Navbar from "./Navbar";

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
        <Colorbox key={color.id} name={color.name} format={color[format]} id={color.id} />
    ));
    return (
        <div className="Palette">
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
            <div className="Palette-colors">
                { colorBoxes }
            </div>
            <footer className="Palette-footer">
                {palette.paletteName}
                <span className="emoji">{ palette.emoji }</span>
            </footer>
        </div>
    )
}

// class Palette extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { level: 500, format: "hex" };
//         this.changeLevel = this.changeLevel.bind(this);
//         this.changeFormat = this.changeFormat.bind(this);
//     }
//     changeLevel(level) {
//         this.setState({level: level})
//     }
//     changeFormat(format) {
//         this.setState({format: format})
//     }
//     render() {
//         const { palette } = this.props;
//         const colors = palette.colors[this.state.level];
//         const colorBoxes = colors.map((color, idx) => (
//             <Colorbox key={color.id} name={color.name} format={color[this.state.format]} paletteId={palette.id} id={color.id} />
//         ));
//         return (
//             <div className="Palette">
//                 <Navbar level={this.state.level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
//                 <div className="Palette-colors">
//                     { colorBoxes }
//                 </div>
//                 <footer className="Palette-footer">
//                     {palette.paletteName}
//                     <span className="emoji">{ palette.emoji }</span>
//                 </footer>
//             </div>
//         )
//     }
// }

export default Palette;