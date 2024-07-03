
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box, Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar, Typography, Divider, IconButton, Button, Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from "react-color";
import DraggableColorBox from "./DraggableColorBox";

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme }) => ({
    flexGrow: 1,
        padding: theme.spacing(3),
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
    {
        props: ({ open }) => open,
        style: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        },
    },
    ],
}),
);

const AppBar = styled(MuiAppBar, {
shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
variants: [
    {
    props: ({ open }) => open,
    style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    },
],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
display: 'flex',
alignItems: 'center',
padding: theme.spacing(0, 1),
// necessary for content to be below app bar
...theme.mixins.toolbar,
justifyContent: 'flex-end',
}));

export default function NewPaletteForm() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [backgroundState, setBackgroundState] = React.useState("purple");
    const [colorArray, addColorArray] = React.useState(["purple", "#444"]);

    const handleSetBackgroundState = (currentColor, evt) => {
        setBackgroundState(currentColor.hex);
    }

    const handleAddColorArray = () => {
        addColorArray([...colorArray, backgroundState]);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
            {
                mr: 2,
            },
            open && { display: 'none' },
            ]}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
            Persistent drawer
        </Typography>
        </Toolbar>
    </AppBar>
    <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
        }}
        variant="persistent"
        anchor="left"
        open={open}
    >
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
        </IconButton>
        </DrawerHeader>
            <Divider />
            <Typography variant='h4'>Design your palette</Typography>
            <Stack spacing={2} direction="row">
                <Button variant='contained' color='secondary'>Clear Palette</Button>
                <Button variant='contained' color='primary'>Random Color</Button>
            </Stack>
            <ChromePicker color={backgroundState} onChangeComplete={handleSetBackgroundState} />
            <Button variant='contained' style={{backgroundColor: backgroundState}} onClick={handleAddColorArray}>Add new color!</Button>
    </Drawer>
    <Main open={open}>
            <DrawerHeader />
                {colorArray.map(color => (
                    <DraggableColorBox color={color} />
                ))}
    </Main>
    </Box>
);
}