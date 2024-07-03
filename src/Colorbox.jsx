import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLocation, useNavigate } from "react-router-dom";
import chroma from "chroma-js";

import {
    ColorboxComponent,
    SpanComponentOne,
    SpanComponentTwo,
    CopyButtonComponent,
    BoxContentContainer,
    CopyMessageContainer,
    CopyOverlayComponent,
} from "./styles/ColorboxStyles";

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
                    <CopyMessageContainer isCopied={copied} isDark={ isDarkColor }>
                        <h1>copied!</h1>
                        <p isDark={isDarkColor}>{format}</p>
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