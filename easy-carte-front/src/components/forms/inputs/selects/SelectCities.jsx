import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { citySelected } from '../../../../redux/appSlice';
import { useDispatch } from 'react-redux';

function SelectCities({ selectedStateId }) {
    const dispatch = useDispatch();
    const [cities, setCities] = useState({});
    const [selectedCityId, setSelectedCityId] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const handleChangeCity = (event) => {
        setSelectedCityId(event.target.value);
        dispatch(citySelected(event.target.value));
    }

    useEffect(() => {
        if (selectedStateId) {
            setSelectedCityId(0);
            externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + selectedStateId + '/municipios')
                .then((response) => {
                    setCities(response.data);
                    setDisabled(false);
                });
        } else {
            setDisabled(true);
        }
    }, [selectedStateId]);

    return (
        <FormControl fullWidth>
            <InputLabel id='city'>Cidade</InputLabel>
            <Select
                labelId='city'
                id='city'
                label='Cidade'
                value={selectedCityId}
                onChange={handleChangeCity}
                disabled={disabled}
            >
                <MenuItem value={0}>Selecione</MenuItem>
                {
                    cities.length > 0 && cities.map((item) => {
                        return <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectCities;