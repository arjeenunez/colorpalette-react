import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { styled } from '@mui/material/styles';

const DraggableColorBoxComponent = styled('div')(
    ({ color, transition, transform }) => `
    width: 20%;
    height: 25%;
    display: inline-block;
    position: relative;
    cursor: grab;
    margin-bottom: -3.5px;
    background-color: ${color};
    transform: ${CSS.Transform.toString(transform)};
    transition: ${transition};
    
    :active {
        cursor: grabbing;
    }
    
    :hover svg {
        color: white;
        transform: scale(1.25);
        transition: all ease-in-out 0.4s;
    }
`
);

const BoxContentComponent = styled('div')`
    position: absolute;
    padding: 10px;
    width: 90%;
    left: 0;
    bottom: 0;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DeleteIconContainer = styled('div')`
    color: rgba(0, 0, 0, 0.5);
`;

const Container = styled('div')`
    width: 20%;
    height: 25%;
    posiion: relative;
`;

const DraggableColorBox = props => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });
    console.log(transform);
    const deleteColor = evt => {
        evt.stopPropagation();
        props.deleteFromColorArray(props.id.name);
    };

    return (
        <DraggableColorBoxComponent color={props.id.color} transition={transition} transform={transform} ref={setNodeRef} {...attributes} {...listeners}>
            <BoxContentComponent>
                <span>{props.id.name}</span>
                <DeleteIconContainer>
                    <DeleteIcon onClick={deleteColor} />
                </DeleteIconContainer>
            </BoxContentComponent>
        </DraggableColorBoxComponent>
    );
};

export default DraggableColorBox;
