import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Root, MyContainer, MyNav, Palettes } from "./styles/PaletteListStyles";
import {Link} from "react-router-dom"

function PaletteList({ palettes }) {
    return (
        <Root>
            <MyContainer>
                <MyNav>
                    <h1>React Colors</h1>
                    <Link exact to="/palette/new">Create Palette</Link>
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