import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function DefaultSelect({ data, selectId, selectLabel, optionIdField, optionTextField }) {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleChangeOption = (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id={selectId}>{selectLabel}</InputLabel>
            <Select
                labelId={selectId}
                id={selectId}
                label={selectLabel}
                value={selectedOption}
                onChange={handleChangeOption}
            >
                <MenuItem value={0}>Selecione</MenuItem>
                {
                    data.length > 0 && data.map((item) => {
                        return <MenuItem key={item[optionIdField]} value={item[optionIdField]}>{item[optionTextField]}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default DefaultSelect;