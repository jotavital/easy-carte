import { Grid } from '@mui/material';
import SelectEstados from './SelectEstados';
import SelectCidades from './SelectCidades';
import { useState } from 'react';

function SelectEstadoCidade() {
    const [selectedEstadoId, setSelectedEstadoId] = useState(31);

    return (
        <Grid item container spacing={1} xs={12}>
            <Grid item xs={6}>
                <SelectEstados selectedEstadoId={selectedEstadoId} setSelectedEstadoId={setSelectedEstadoId} />
            </Grid>
            <Grid item xs={6}>
                <SelectCidades selectedEstadoId={selectedEstadoId} />
            </Grid>
        </Grid>
    );
}

export default SelectEstadoCidade;