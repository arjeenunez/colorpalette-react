import React, { Component, useState } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { MenuItem, Select, Snackbar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const NavbarComponent = styled('header')`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 5vh;
`;

const LogoComponent = styled('div')`
    margin-right: 15px;
    padding: 0 13px;
    font-size: 22px;
    background-color: #eceff1;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    display: flex;
    align-items: center;

    a, a:visited {
        text-decoration: none;
        color: black;
    }
`;

const SliderComponent = styled("div")`
    width: 340px;
    margin: 0;
    padding-left: 20px;
    display: inline-block;

    > .rc-slider-track {
    background-color: transparent;
    }

    > .rc-slider-rail {
        height: 8px;
    }

    > .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus {
        background-color: green;
        outline: none;
        border: 2px solid green;
        box-shadow: none;
        width: 13px;
        height: 13px;
        margin-left: -7px;
        margin-top: -3px;
    }

    > .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border: none;
        box-shadow: none;
    }
`;
const SelectContainerComponent = styled("div")`
    margin-left: auto;
    margin-right: 1rem;
`;

function Navbar({ level, changeLevel, changeFormat }) {

    const [format, updateFormat] = useState("hex");
    const [open, toggleOpen] = useState(false);

    function handleFormatChange(evt) {
        updateFormat(evt.target.value);
        changeFormat(evt.target.value);
        toggleOpen(true);
    }
    
    function closeSnackBar(evt) {
        toggleOpen(false);
    }

    return (
        <NavbarComponent>
            <LogoComponent>
                <Link exact to={"/"}>reactcolorpicker</Link>
            </LogoComponent>
            {level && (
                <div>
                    <span>Level: {level} </span>
                    <SliderComponent>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            onChange={changeLevel}
                            step={100}
                        />
                    </SliderComponent>
                </div>
            )}
            <SelectContainerComponent>
                <Select value={format} onChange={handleFormatChange} >
                    <MenuItem value={"hex"}>HEX - #fff</MenuItem>
                    <MenuItem value={"rgb"}>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value={"rgba"}>RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </SelectContainerComponent>
            <div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format has been changed to {format.toUpperCase()}</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={closeSnackBar}
                    action={[
                        <IconButton
                            onClick={closeSnackBar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <Close/>
                        </IconButton>
                    ]}
                />
            </div>
        </NavbarComponent>
    )
}


export default Navbar;