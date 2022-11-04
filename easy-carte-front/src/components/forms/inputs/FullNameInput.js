import { TextField } from "@mui/material";

function FullNameInput({ errors, register }) {
    return (
        <TextField
            fullWidth
            error={!!errors.full_name}
            helperText={errors.full_name?.message}
            label="Nome completo"
            type="text"
            {...register("full_name", {
                required: {
                    value: true,
                    message: "Informe o seu nome completo",
                },
            })}
        />
    );
}

export default FullNameInput;
