import { styled } from "@mui/material/styles";

const SinglePaletteComponent = styled("div")`
    height: 100vh;
    overflow: hidden;
`;

const PaletteColorsComponent = styled('div')`
     height: 90%;
`;

const BackButtonComponent = styled('p')`
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
    color: white;
    text-transform: uppercase;
    border: none;
    opacity: 1;
`;

const GoBackComponent = styled('div')`
    background-color: black;
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
`;

export { SinglePaletteComponent, PaletteColorsComponent, BackButtonComponent, GoBackComponent };