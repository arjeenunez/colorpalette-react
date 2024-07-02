import React, { Component, useState } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useLocation } from "react-router-dom";
import chroma from "chroma-js";

function Colorbox({ format, name, id, showLink }) {
    const [copied, toggleCopied] = useState(false);
    const changeCopyState = () => {
        toggleCopied(copied => !copied);
        setTimeout(() => toggleCopied(copied => !copied), 1250);
    }
    const Location = useLocation();
    const isCopied = copied ? " show" : "";
    const isDarkColor = chroma(format).luminance() <= 0.15;
    const isLightColor = chroma(format).luminance() >= 0.6;
    return (
            <CopyToClipboard text={format} onCopy={changeCopyState}>
                <div style={{ background: format }} className="Colorbox">
                    <div style={{ background: format }} className={`copy-overlay${isCopied}`}></div>
                    <div className={`copy-message${isCopied}`}>
                        <h1>copied!</h1>
                        <p className={isLightColor && "dark-text"}>{format}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={`${Location.pathname}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
    )
}

// class Colorbox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { copied: false }
//         this.changeCopyState = this.changeCopyState.bind(this);
//     }
//     changeCopyState() {
//         this.setState({ copied: true }, () => {
//             setTimeout(() => this.setState({copied: false}), 1000)
//         });
//     }
//     render() {
//         const { format, name, paletteId, id } = this.props;
//         const isCopied = this.state.copied ? " show" : "";
//         return (
//             <CopyToClipboard text={format} onCopy={this.changeCopyState}>
//                 <div style={{ background: format }} className="Colorbox">
//                     <div style={{ background: format }} className={`copy-overlay${isCopied}`}></div>
//                     <div className={`copy-message${isCopied}`}>
//                         <h1>copied!</h1>
//                         <p>{format}</p>
//                     </div>
//                     <div className="copy-container">
//                         <div className="box-content">
//                             <span>{name}</span>
//                         </div>
//                         <button className="copy-button">Copy</button>
//                     </div>
//                     <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
//                         <span className="see-more">More</span>
//                     </Link>
//                 </div>
//             </CopyToClipboard>
//         )
//     }
// }

export default Colorbox;