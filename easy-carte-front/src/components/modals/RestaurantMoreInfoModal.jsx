import { Button, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";

function RestaurantMoreInfoModal({ restaurant }) {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Button startIcon={<AddCircleOutlineIcon />} onClick={handleOpenModal}>
                <Typography>Mais informações</Typography>
            </Button>
            <CustomModal
                open={open}
                handleCloseModal={handleCloseModal}
                title={"Mais informações de " + restaurant.name}
                content={
                    <>
                        <Typography padding>
                            <strong>Endereço: </strong>
                            {restaurant.formatted_address}
                        </Typography>
                        <Typography padding>
                            <strong>Horário de funcionamento: </strong>
                            {restaurant.opening_hours}
                        </Typography>
                    </>
                }
            />
        </>
    );
}

export default RestaurantMoreInfoModal;