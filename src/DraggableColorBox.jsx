import React from "react";
import { DraggableColorBoxComponent } from "./styles/DraggableColorBoxStyles";

function DraggableColorBox({color}) {
    return (
        <DraggableColorBoxComponent backgroundColor={color}>
            {color}
        </DraggableColorBoxComponent>
    )
}

export default DraggableColorBox;