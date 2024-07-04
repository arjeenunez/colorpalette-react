import { styled } from '@mui/material/styles';

const Root = styled('div')({
    backgroundColor: 'blue',
    minHeight: '100vh',
    // height: 'object-fit',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
});

const MyContainer = styled('div')({
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
});

const MyNav = styled('nav')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'baseline',
    color: 'white',
    a: {
        color: 'white',
    },
});

const Palettes = styled('div')({
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gap: '5%',
});

export { Root, MyContainer, MyNav, Palettes };
