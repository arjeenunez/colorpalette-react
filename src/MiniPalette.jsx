import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyDiv = styled("div")({
    backgroundColor: "red",
    border: "3px solid black",
    "& h1": {
        color: "white"
    }
})

function MiniPalette() {
    return (
        <MyDiv>
            <h1>Hi there</h1>
        </MyDiv>
    )
}

// export default withStyles(styles)(MiniPalette);
export default MiniPalette;