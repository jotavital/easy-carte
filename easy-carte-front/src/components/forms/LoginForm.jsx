import { useTheme } from "@emotion/react";
import { Grid, Stack, Typography, Link } from "@mui/material";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/auth";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import CustomButton from "../buttons/CustomButton";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { login } = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const theme = useTheme();

    const onSubmit = (data) => {
        login(data);
    };

    useEffect(() => {
        if(!!searchParams.get("registerSuccess")) {
            toast.success("Você se cadastrou com sucesso!");

            setSearchParams(searchParams.delete("registerSuccess"));
        }
    });

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <Grid container>
                    <Typography textAlign="center" color={theme.palette.info.main}>
                        Ainda não tem login?
                        <Link marginLeft={1} href="/register">
                            Cadastre-se
                        </Link>
                    </Typography>
                </Grid>
                <Grid container justifyContent="center">
                    <CustomButton text="Entrar" type="submit" />
                </Grid>
            </Stack>
        </form>
    );
}

export default LoginForm;
