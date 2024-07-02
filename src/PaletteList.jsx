import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/material/styles"

const Root = styled("div")({
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
})

const MyContainer = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
})

const MyNav = styled("nav")({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
})

const Palettes = styled("div")({
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gap: "5%"
});

function PaletteList({ palettes }) {
    return (
        <Root>
            <MyContainer>
                <MyNav>
                    <h1>React Colors</h1>
                </MyNav>
                <Palettes>
                    {palettes.map(el => (
                        <MiniPalette exact to={`/palette/${el.id}`} key={el.id} {...el} />
                    ))}
                </Palettes>
            </MyContainer>
        </Root>
    )
}

export default PaletteList;