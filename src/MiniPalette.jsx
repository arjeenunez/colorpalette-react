import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")({
    background: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "& :hover": {
        cursor: "pointer"
    }
})

const Colors = styled("div")({
    backgroundColor: "grey",
})

const Title = styled("h5")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
})

const Emoji = styled("span")({
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
})

function MiniPalette(props) {
    const { paletteName: name, colors, emoji } = props;
    return (
        <Root className="root">
            <Colors className="colors"></Colors>
            <Title className="title">{name} <Emoji className="emoji">{emoji}</Emoji></Title>
        </Root>
    )
}

// export default withStyles(styles)(MiniPalette);
export default MiniPalette;