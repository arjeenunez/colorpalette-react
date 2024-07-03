import { styled } from "@mui/material/styles";

const PaletteFooterComponent = styled("div")`
    background-color: white;
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
`;

const EmojiComponent = styled("span")`
    font-size: 1.5rem;
    margin: 0 1rem; 
`;

export { PaletteFooterComponent, EmojiComponent };