import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar, Typography, Divider, IconButton, Button, Stack } from '@mui/material';
import { AddToPhotos } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 'calc(100vh - 64px)',
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
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
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

export default function NewPaletteForm({ changePalettes }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [pickedColor, setPickedColor] = React.useState('purple');
    const [pickedColorName, setPickedColorName] = React.useState('');
    const [colorArray, setColorArray] = React.useState([
        { name: 'Purple', color: 'purple' },
        { name: 'Whatever', color: '#444' },
    ]);
    const Navigate = useNavigate();

    const changePickedColor = currentColor => setPickedColor(currentColor.hex);
    const changePickedColorName = evt => setPickedColorName(evt.target.value);
    const goBack = () => Navigate(-1);

    const changeColorArray = () => {
        setColorArray([...colorArray, { name: pickedColorName, color: pickedColor }]);
        setPickedColorName('');
    };
    const savePalette = () => {
        const newPaletteName = 'Test colors';
        const newPaletteId = newPaletteName.toLowerCase().replace(/" "/g, '-');
        changePalettes({ paletteName: newPaletteName, id: newPaletteId, emoji: '😙', colors: colorArray });
        Navigate('/');
    };

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colorArray.every(color => color.name.toLowerCase() !== value.toLowerCase());
        });
    }, [pickedColorName]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" color="default" open={open}>
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
                        ]}>
                        <AddToPhotos />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                    <Stack spacing={1} direction={'row'}>
                        <Button variant="contained" color="error" onClick={goBack}>
                            Go back
                        </Button>
                        <Button variant="contained" color="primary" onClick={savePalette}>
                            Save Palette
                        </Button>
                    </Stack>
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
                open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Typography variant="h4">Design your palette</Typography>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="secondary">
                        Clear Palette
                    </Button>
                    <Button variant="contained" color="primary">
                        Random Color
                    </Button>
                </Stack>
                <ChromePicker color={pickedColor} onChangeComplete={changePickedColor} />
                <ValidatorForm onSubmit={changeColorArray}>
                    <TextValidator onChange={changePickedColorName} value={pickedColorName} validators={['required', 'isColorNameUnique']} errorMessages={['This field is required', 'Color name must be unique']} />
                    <Button type="submit" variant="contained" style={{ backgroundColor: pickedColor }}>
                        Add new color!
                    </Button>
                </ValidatorForm>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {colorArray.map(color => (
                    <DraggableColorBox color={color.color} name={color.name} key={color.name} />
                ))}
            </Main>
        </Box>
    );
}
