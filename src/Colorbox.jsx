import React, { Component } from "react";
import "./Colorbox.css";

class Colorbox extends Component {
    render() {
        const { background: { name, color} } = this.props;
        return (
            <div style={{ background: `${color}` }} className="Colorbox">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        )
    }
}

export default Colorbox;