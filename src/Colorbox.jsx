import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Colorbox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        });
        // this.setState({ copied: true });
    }
    render() {
        const { background: { name, color } } = this.props;
        const isCopied = this.state.copied ? " show" : "";
        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div style={{ background: color }} className="Colorbox">
                    <div style={{ background: color }} className={`copy-overlay${isCopied}`}></div>
                    <div className={`copy-message${isCopied}`}>
                        <h1>copied!</h1>
                        <p>{color}</p>
                    </div>
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