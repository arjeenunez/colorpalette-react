import { styled } from '@mui/material/styles';
import { CSS } from '@dnd-kit/utilities';

const DraggableColorBoxComponent = styled('div')(
    ({ backgroundColor, transition, transform }) => `
    width: 20%;
    height: 25%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: grab;
    margin-bottom: -3.5px;
    background: ${backgroundColor};
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

export { DraggableColorBoxComponent, BoxContentComponent, DeleteIconContainer };
