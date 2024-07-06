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

const arrayMove = (array, oldIndex, newIndex) => {
    return dndKitArrayMove(array, oldIndex, newIndex);
};

export default function NewPaletteForm({ changePalettes, palettes, id }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [pickedColor, setPickedColor] = React.useState('purple');
    const [pickedColorName, setPickedColorName] = React.useState('');
    const [paletteName, setPaletteName] = React.useState('');
    const [colorArray, setColorArray] = React.useState([
        { name: 'Purple', color: 'purple' },
        { name: 'Whatever', color: '#444' },
        { name: 'Blue', color: 'blue' },
        { name: 'Yellow', color: 'yellow' },
    ]);
    const Navigate = useNavigate();

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
                <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                    <NewPaletteFormList id="ColorArray" items={colorArray} deleteFromColorArray={deleteFromColorArray} />
                </DndContext>
            </Main>
        </Box>
    );
}
