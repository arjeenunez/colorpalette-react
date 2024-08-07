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
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
})

const Title = styled("h5")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "0.8rem",
    position: "relative"
})

const Emoji = styled("span")({
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
})

const Minicolorboxes = styled("div")(({ backgroundColor }) => ({
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
    backgroundColor: backgroundColor,
}));

export { Root, Colors, Title, Emoji, Minicolorboxes };