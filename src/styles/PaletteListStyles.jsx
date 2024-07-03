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

export { Root, MyContainer, MyNav, Palettes };