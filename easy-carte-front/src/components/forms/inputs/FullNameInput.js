import { TextField } from '@mui/material';

function FullNameInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
            label='Nome completo'
            type='text'
            {...register('full_name',
                {
                    required: {
                        value: true,
                        message: 'Informe o seu nome completo'
                    }
                }
            )}
        />
    );
}

export default FullNameInput;