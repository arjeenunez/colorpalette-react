import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, AppBar as MuiAppBar, Toolbar, Typography, Divider, IconButton, Button, Stack } from '@mui/material';
import { AddToPhotos } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { arrayMove as dndKitArrayMove } from '@dnd-kit/sortable';
import NewPaletteFormList from './NewPaletteFormList';
import NewPaletteNav from './NewPaletteNav';
import ColorPicker from './ColorPicker';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    // marginTop: '64px',
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

const DrawerContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const ColorPickerContainer = styled('div')`
    margin-top: 2rem;
    width: 100% !important;

    .chrome-picker {
        margin: auto;
        width: 100% !important;
    }
`;

const ColorPickerButton = styled(Button)`
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 2rem;
`;

const InputComponent = styled(TextValidator)`
    width: 100%;
`;

const arrayMove = (array, oldIndex, newIndex) => {
    return dndKitArrayMove(array, oldIndex, newIndex);
};

export default function NewPaletteForm({ changePalettes, palettes, id }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [pickedColor, setPickedColor] = React.useState('purple');
    const [pickedColorName, setPickedColorName] = React.useState('');
    const [paletteName, setPaletteName] = React.useState('');
    const [colorArray, setColorArray] = React.useState(palettes[0].colors);
    const Navigate = useNavigate();
    const paletteFull = colorArray.length >= 20;

    const changePickedColor = currentColor => setPickedColor(currentColor.hex);
    const changePickedColorName = evt => setPickedColorName(evt.target.value);
    const changePaletteName = evt => setPaletteName(evt.target.value);
    const goBack = () => Navigate(-1);

    const changeColorArray = () => {
        setColorArray([...colorArray, { name: pickedColorName, color: pickedColor }]);
        setPickedColorName('');
    };

    const deleteFromColorArray = colorName => {
        setColorArray([...colorArray.filter(color => color.name !== colorName)]);
    };

    const savePalette = () => {
        const paletteId = paletteName.toLowerCase().replaceAll(' ', '-');
        changePalettes({ paletteName: paletteName, id: paletteId, emoji: '😙', colors: colorArray });
        Navigate('/');
    };

    const clearColorArray = () => setColorArray([]);
    const addRandomColorArray = () => {
        const colorPool = palettes.flatMap(el => el.colors);
        const randColorIdx = Math.floor(Math.random() * colorPool.length);
        setColorArray([...colorArray, colorPool[randColorIdx]]);
    };

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colorArray.every(color => color.name.toLowerCase() !== value.toLowerCase());
        });
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase());
        });
    }, [pickedColorName, paletteName]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = ({ active, over }) => {
        const activeIndex = active.data.current.sortable.index; // Previous index in the array
        const overIndex = over.data.current?.sortable.index || 0; // New index in the

        setColorArray(colorArray => [...arrayMove(colorArray, activeIndex, overIndex)]);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <NewPaletteNav savePalette={savePalette} paletteName={paletteName} changePaletteName={changePaletteName} goBack={goBack} open={open} handleDrawerOpen={handleDrawerOpen} /> */}
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
                    <ValidatorForm onSubmit={savePalette}>
                        <Stack direction="row">
                            <TextValidator size="small" variant="filled" value={paletteName} name="paletteName" onChange={changePaletteName} validators={['required', 'isPaletteNameUnique']} errorMessages={['This field is required', 'Palette name must be unique']} />
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </ValidatorForm>
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
                <DrawerContainer>
                    <Typography variant="h4" gutterBottom>
                        Design your palette
                    </Typography>
                    <div>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" color="secondary" onClick={clearColorArray}>
                                Clear Palette
                            </Button>
                            <Button variant="contained" color="primary" onClick={addRandomColorArray} disabled={paletteFull}>
                                {!paletteFull ? 'Random Color' : 'Palette full!'}
                            </Button>
                        </Stack>
                        <ColorPickerContainer>
                            <ChromePicker color={pickedColor} onChangeComplete={changePickedColor} />
                            <ValidatorForm onSubmit={changeColorArray}>
                                <InputComponent margin="normal" variant="filled" size="small" onChange={changePickedColorName} value={pickedColorName} validators={['required', 'isColorNameUnique']} errorMessages={['This field is required', 'Color name must be unique']} />
                                <ColorPickerButton type="submit" variant="contained" style={{ backgroundColor: `${!paletteFull ? pickedColor : 'lightgrey'}` }} disabled={paletteFull}>
                                    {!paletteFull ? 'Add new color!' : 'Palette full!'}
                                </ColorPickerButton>
                            </ValidatorForm>
                        </ColorPickerContainer>
                    </div>
                </DrawerContainer>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                    <NewPaletteFormList id="ColorArray" items={colorArray} deleteFromColorArray={deleteFromColorArray} />
                </DndContext>
            </Main>
        </Box>
    );
}
