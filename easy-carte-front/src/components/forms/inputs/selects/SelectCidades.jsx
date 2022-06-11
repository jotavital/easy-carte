import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectCidades({ selectedEstadoId }) {
    const [cidades, setCidades] = useState({});
    const [selectedCidadeId, setSelectedCidadeId] = useState(0);

    const handleChangeCidade = (event) => {
        setSelectedCidadeId(event.target.value);
    }

    useEffect(() => {
        externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + selectedEstadoId + '/municipios')
            .then((response) => {
                setCidades(response.data);
            });
    }, [selectedEstadoId]);

    return (
        <FormControl fullWidth>
            <InputLabel id='cidades'>Cidade</InputLabel>
            <Select
                labelId='cidades'
                id='cidades'
                label='Cidade'
                value={selectedCidadeId}
                onChange={handleChangeCidade}
            >
                <MenuItem value={0}>Selecione</MenuItem>
                {
                    cidades.length > 0 && cidades.map((item) => {
                        return <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectCidades;