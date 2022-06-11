import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectEstados({ selectedEstadoId, setSelectedEstadoId }) {
    const [estados, setEstados] = useState({});

    const handleChangeEstado = (event) => {
        setSelectedEstadoId(event.target.value);
    }

    useEffect(() => {
        externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then((response) => {
                setEstados(response.data);
            });
    }, []);

    return (
        <FormControl fullWidth>
            <InputLabel id='estados'>Estado</InputLabel>
            <Select
                labelId='estados'
                id='estados'
                label='Estado'
                value={selectedEstadoId}
                onChange={handleChangeEstado}
            >
                <MenuItem value={0}>Selecione</MenuItem>
                {
                    estados.length > 0 && estados.map((item) => {
                        return <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectEstados;