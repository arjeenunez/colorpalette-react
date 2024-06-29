import React, { Component } from "react";
import Colorbox from "./Colorbox";
import 'rc-slider/assets/index.css';
import "./Palette.css";
import Slider from "rc-slider";

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
                <div className="slider">
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        onChange={this.changeLevel}
                        step={100}

                    />
                </div>
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