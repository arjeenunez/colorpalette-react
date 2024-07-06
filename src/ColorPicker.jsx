import * as React from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@mui/material';

function ColorPicker({ paletteFull, changeColorArray }) {
    const [pickedColor, setPickedColor] = React.useState('purple');
    const [pickedColorName, setPickedColorName] = React.useState('');
    const changePickedColorName = evt => setPickedColorName(evt.target.value);
    const changePickedColor = currentColor => setPickedColor(currentColor.hex);
    return (
        <div>
            <ChromePicker color={pickedColor} onChangeComplete={changePickedColor} />
            <ValidatorForm onSubmit={changeColorArray}>
                <TextValidator onChange={changePickedColorName} value={pickedColorName} validators={['required', 'isColorNameUnique']} errorMessages={['This field is required', 'Color name must be unique']} />
                <Button type="submit" variant="contained" style={{ backgroundColor: `${!paletteFull ? pickedColor : 'lightgrey'}` }} disabled={paletteFull}>
                    {!paletteFull ? 'Add new color!' : 'Palette full!'}
                </Button>
            </ValidatorForm>
        </div>
    );
}

export default ColorPicker;
