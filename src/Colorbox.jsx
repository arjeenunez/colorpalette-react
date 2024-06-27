import React, { Component } from "react";
import "./Colorbox.css";

class Colorbox extends Component {
    render() {
        const { background } = this.props;
        return (
            <div style={{background: `${background.color}`}} className="Colorbox">
                <span>{background.name}</span>
                <span>MORE</span>
            </div>
        )
    }
}

export default Colorbox;