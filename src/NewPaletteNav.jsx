import * as React from 'react';
import { styled } from '@mui/material/styles';
import { CssBaseline, AppBar as MuiAppBar, Toolbar, Typography, IconButton, Button, Stack } from '@mui/material';
import { AddToPhotos } from '@mui/icons-material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop !== 'open' })(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '50px',
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

function NewPaletteNav({ savePalette, paletteName, changePaletteName, goBack, open, handleDrawerOpen }) {
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed" color="default" open={open}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{ mr: 2 }, open && { display: 'none' }]}>
                        <AddToPhotos />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create A Palette
                    </Typography>
                </Toolbar>
                <Stack direction="row">
                    <Stack spacing={1} direction={'row'}>
                        <Button variant="contained" color="error" onClick={goBack} size="small">
                            Go back
                        </Button>
                        <Button variant="contained" color="primary" onClick={savePalette} size="small">
                            Save Palette
                        </Button>
                    </Stack>
                    <ValidatorForm onSubmit={savePalette}>
                        <TextValidator size="small" variant="filled" value={paletteName} name="paletteName" onChange={changePaletteName} validators={['required', 'isPaletteNameUnique']} errorMessages={['This field is required', 'Palette name must be unique']} />
                        <Button type="submit">Submit</Button>
                    </ValidatorForm>
                </Stack>
            </AppBar>
        </div>
    );
}

export default NewPaletteNav;
