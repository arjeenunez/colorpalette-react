import React, { Component, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useLocation, useNavigate } from "react-router-dom";
import chroma from "chroma-js";
import { styled } from "@mui/material/styles"
import "./Colorbox.css";

const ColorboxComponent = styled('div')(({ backgroundColor, showLink }) =>`
    width: 20%;
    height: ${showLink ? "25%" : "50%"};
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    background: ${backgroundColor};

    :hover button {
        opacity: 1;
    }
`);

const SpanComponentOne = styled('span')`
    color: ${props => props.isDark ? "white" : "black"}
`;

const SpanComponentTwo = styled('span')`
    color: ${props => props.isDark ? "white" : "black"};
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    border: none;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
    margin: 0;

`;

const CopyButtonComponent = styled('button')`
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin: -15px 0 0 -50px;
    padding: 0;
    text-align: center;
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    line-height: 30px;
    color: ${props => props.isDark ? "white" : "black"};
    text-transform: uppercase;
    border: none;
    transition: all ease-in 0.5s;
    opacity: 0;
`;

const BoxContentContainer = styled("div")`
    position: absolute;
    padding: 10px;
    width: 90%;
    left: 0;
    bottom: 0;
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 11px;
`;

const CopyMessageContainer = styled("div")(({ isCopied }) => `
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    color: white;
    flex-direction: column;
    transform: scale(0.1);
    opacity: 0;
    transform: ${!isCopied ? "scale(0.1)" : "scale(1)"};
    opacity: ${!isCopied ? "0" : "1"};
    z-index: ${!isCopied ? "0" : "25"};
    transform: ${!isCopied ? "" : "transform ease-in 0.4s"};
    transition-delay: ${!isCopied ? "0s" : "0.3s"};

    > h1 {
        font-weight: 400;
        text-shadow: 1px 2px black;
        background-color: rgba(255, 255, 255, 0.2);
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 1rem;
        text-transform: uppercase;
    }

    > p {
        font-size: 2rem;
        font-weight: 100;
        margin: 0;
        padding: 0;
    }
`,);

const CopyOverlayComponent = styled('div')(({ isCopied, backgroundColor }) => `
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    transition: transform ease-in-out 0.5s;
    transform: ${!isCopied ? "scale(0.1)" : "scale(5)"};
    opacity: ${!isCopied ? "0" : "1"};
    z-index: ${!isCopied ? "0" : "10"};
    position: ${!isCopied ? "inherit" : "fixed"};
    background: ${backgroundColor};
`,);

const ParagraphComponent = styled('p')`color: ${props => props.isDark ? "white" : "black"}`;

function Colorbox({ format, name, id, showLink }) {
    
    const [copied, toggleCopied] = useState(false);
    const changeCopyState = () => {
        toggleCopied(copied => !copied);
        setTimeout(() => toggleCopied(copied => !copied), 1500);
    }

    const Location = useLocation();
    const Navigate = useNavigate();
    const handleMoreClick = (evt) => {
        evt.stopPropagation();
        return Navigate(`${Location.pathname}/${id}`)
    }

    const isDarkColor = chroma(format).luminance() <= 0.15;

    return (
            <CopyToClipboard text={format} onCopy={changeCopyState}>
                <ColorboxComponent backgroundColor={format} showLink={showLink}>
                <CopyOverlayComponent isCopied={copied} backgroundColor={format}></CopyOverlayComponent>
                    <CopyMessageContainer isCopied={copied}>
                        <h1>copied!</h1>
                        <ParagraphComponent isDark={isDarkColor}>{format}</ParagraphComponent>
                    </CopyMessageContainer>
                    <BoxContentContainer>
                        <SpanComponentOne isDark={isDarkColor}>{name}</SpanComponentOne>
                    </BoxContentContainer>
                    <CopyButtonComponent isDark={isDarkColor}>Copy</CopyButtonComponent>
                    {showLink && (
                        <SpanComponentTwo isDark={isDarkColor} onClick={handleMoreClick}>MORE</SpanComponentTwo>
                    )}
                </ColorboxComponent>
            </CopyToClipboard>
    )
}


export default Colorbox;