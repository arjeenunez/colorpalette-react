import React, { Component } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import "./Navbar.css";
import { MenuItem, Select, Snackbar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    handleFormatChange(evt) {
        this.setState({ format: evt.target.value });
        this.props.changeFormat(evt.target.value);
        this.setState({open: true})
    }
    closeSnackBar() {
        this.setState({ open: false });
    }
    render() {
        const { level, changeLevel } = this.props;
        const format = this.state.format;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link exact to={"/"}>reactcolorpicker</Link>
                    {/* <a href="">reactcolorpicker</a> */}
                </div>
                <div className="slider-container">
                    <span>Level: {level} </span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            onChange={changeLevel}
                            step={100}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormatChange} >
                        <MenuItem value={"hex"}>HEX - #fff</MenuItem>
                        <MenuItem value={"rgb"}>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value={"rgba"}>RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <div>
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        open={this.state.open}
                        autoHideDuration={3000}
                        message={<span id="message-id">Format has been changed to {format.toUpperCase()}</span>}
                        ContentProps={{ "aria-describedby": "message-id" }}
                        onClose={this.closeSnackBar}
                        action={[
                            <IconButton
                                onClick={this.closeSnackBar}
                                color="inherit"
                                key="close"
                                aria-label="close"
                            >
                                <Close/>
                            </IconButton>
                        ]}
                    />
                </div>
            </header>
        )
    }
}

export default Navbar;