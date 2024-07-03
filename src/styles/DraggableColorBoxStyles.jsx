import { styled } from "@mui/material/styles";

const DraggableColorBoxComponent = styled('div')(({ backgroundColor }) =>`
    width: 20%;
    height: 25%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    background: ${backgroundColor};

    :active {
        cursor: grabbing;
    }
`);

export { DraggableColorBoxComponent };