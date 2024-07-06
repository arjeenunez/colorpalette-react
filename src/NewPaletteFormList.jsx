import { useDroppable } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import React from 'react';
import { styled } from '@mui/material/styles';
import DraggableColorBox from './DraggableColorBox';

const Container = styled('div')`
    height: calc(100vh - 104px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const NewPaletteFormList = ({ id, items, deleteFromColorArray }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <Container ref={setNodeRef}>
                {items.map(item => (
                    <DraggableColorBox key={item.name} id={item} deleteFromColorArray={deleteFromColorArray} />
                ))}
            </Container>
        </SortableContext>
    );
};

export default NewPaletteFormList;
