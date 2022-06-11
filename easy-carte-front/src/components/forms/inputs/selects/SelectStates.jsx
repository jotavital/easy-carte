import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectStates({ selectedStateId, setSelectedStateId }) {
    const [states, setStates] = useState({});

    const handleChangeState = (event) => {
        setSelectedStateId(event.target.value);
    }

    useEffect(() => {
        externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then((response) => {
                setStates(response.data);
            });
    }, []);

    return (
        <FormControl fullWidth>
            <InputLabel id='state'>Estado</InputLabel>
            <Select
                labelId='state'
                id='state'
                label='Estado'
                value={selectedStateId}
                onChange={handleChangeState}
            >
                <MenuItem value={0}>Selecione</MenuItem>
                {
                    states.length > 0 && states.map((item) => {
                        return <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectStates;