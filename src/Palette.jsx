import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./Palette.css";
import Navbar from "./Navbar";


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level: level})
    }
    changeFormat(format) {
        this.setState({format: format})
    }
    render() {
        const { palette } = this.props;
        const colors = palette.colors[this.state.level];
        const colorBoxes = colors.map((color, idx) => (
            <Colorbox key={idx} name={color.name} format={color[this.state.format]} />
        ));
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;