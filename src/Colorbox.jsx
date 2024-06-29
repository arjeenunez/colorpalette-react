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
            setTimeout(() => this.setState({copied: false}), 1000)
        });
        // this.setState({ copied: true });
    }
    render() {
        const { background: { name, hex } } = this.props;
        const isCopied = this.state.copied ? " show" : "";
        return (
            <CopyToClipboard text={hex} onCopy={this.changeCopyState}>
                <div style={{ background: hex }} className="Colorbox">
                    <div style={{ background: hex }} className={`copy-overlay${isCopied}`}></div>
                    <div className={`copy-message${isCopied}`}>
                        <h1>copied!</h1>
                        <p>{hex}</p>
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