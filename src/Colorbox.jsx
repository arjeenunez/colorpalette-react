import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Colorbox extends Component {
    render() {
        const { background: { name, color} } = this.props;
        return (
            <CopyToClipboard text={color}>
                <div style={{ background: `${color}` }} className="Colorbox">
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default Colorbox;