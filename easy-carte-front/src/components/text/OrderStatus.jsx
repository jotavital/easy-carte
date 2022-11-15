import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function OrderStatus({ status }) {
    const {
        palette: { warning, success, info, secondary },
    } = useTheme();
    const [color, setColor] = useState();
    const [text, setText] = useState();

    useEffect(() => {
        switch (status) {
            case "sent_to_kitchen":
                setText("Enviado à cozinha");
                setColor(warning.main);
                break;
            case "in_prepare":
                setText("Em preparo");
                setColor(info.main);
                break;
            case "finished":
                setText("Finalizado");
                setColor(success.main);
                break;
            default:
                setText("Não informado");
                setColor(secondary.main);
        }
    }, [status, warning, info, success, secondary, setText, setColor]);

    return (
        <Typography textAlign="center">
            <strong>
                <span style={{ color: color }}>{text}</span>
            </strong>
        </Typography>
    );
}

export default OrderStatus;
