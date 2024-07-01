import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";

class Colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({copied: false}), 1000)
        });
    }
    render() {
        const { format, name, paletteId } = this.props;
        const isCopied = this.state.copied ? " show" : "";
        return (
            <CopyToClipboard text={format} onCopy={this.changeCopyState}>
                <div style={{ background: format }} className="Colorbox">
                    <div style={{ background: format }} className={`copy-overlay${isCopied}`}></div>
                    <div className={`copy-message${isCopied}`}>
                        <h1>copied!</h1>
                        <p>{format}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <Link to={`/palette/${paletteId}/${name}`} onClick={e => e.stopPropagation()}>
                        <span className="see-more">More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}

export default Colorbox;