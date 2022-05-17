import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function BirthDateInput({ control, defaultValue }) {

    defaultValue = (defaultValue) ? defaultValue : null;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Controller
                control={control}
                name="birth_date"
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        label="Data de nascimento"
                        views={['day', 'month', 'year']}
                        onChange={onChange}
                        value={value}
                        renderInput={
                            (props) =>
                                <TextField
                                    {...props}
                                />
                        }
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default BirthDateInput;