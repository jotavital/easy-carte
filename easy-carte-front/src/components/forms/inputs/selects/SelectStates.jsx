import { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { apiClient } from '../../../../providers/apiClient';

function SelectStates({ selectedStateId, setSelectedStateId }) {
    const [states, setStates] = useState({});

    const handleChangeState = (event) => {
        setSelectedStateId(event.target.value);
    }

    useEffect(() => {
        apiClient.get('/states')
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
                        return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectStates;