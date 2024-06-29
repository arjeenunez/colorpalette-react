import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./Palette.css";
import Navbar from "./Navbar";


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({level: level})
    }
    render() {
        const { palette } = this.props;
        const colors = palette.colors[this.state.level];
        const colorBoxes = colors.map((color, idx) => (
            <Colorbox key={idx} background={color} />
        ));
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                <div className="Palette-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;