import { styled } from "@mui/material/styles";
import 'rc-slider/assets/index.css';

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

export { NavbarComponent, LogoComponent, SliderComponent, SelectContainerComponent };