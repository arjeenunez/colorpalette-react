import React, { useState } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { MenuItem, Select, Snackbar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom";
import { NavbarComponent, LogoComponent, SliderComponent, SelectContainerComponent } from "./styles/NavbarStyles";

function Navbar({ level, changeLevel, format, open, handleFormatChange, closeSnackBar }) {
    console.log(format);
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
                    message={<span id="message-id">Format has been changed to {format.toUpperCase()}!</span>}
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