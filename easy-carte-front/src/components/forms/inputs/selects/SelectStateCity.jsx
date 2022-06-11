import { Grid } from '@mui/material';
import SelectStates from './SelectStates';
import SelectCities from './SelectCities';
import { useState } from 'react';

function SelectStateCity() {
    const [selectedStateId, setSelectedStateId] = useState(0);

    return (
        <Grid item container spacing={1} xs={12}>
            <Grid item xs={6}>
                <SelectStates selectedStateId={selectedStateId} setSelectedStateId={setSelectedStateId} />
            </Grid>
            <Grid item xs={6}>
                <SelectCities selectedStateId={selectedStateId} />
            </Grid>
        </Grid>
    );
}

export default SelectStateCity;