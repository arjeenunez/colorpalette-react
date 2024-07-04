import React from "react";
import { DraggableColorBoxComponent } from "./styles/DraggableColorBoxStyles";

function DraggableColorBox({color, name}) {
    return (
        <DraggableColorBoxComponent backgroundColor={color}>
            {name}
        </DraggableColorBoxComponent>
    )
}

export default DraggableColorBox;