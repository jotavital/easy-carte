import { Typography } from "@mui/material";
import CustomModal from "./CustomModal";

function RestaurantMoreInfoModal({ open, handleCloseModal, restaurant }) {
    return (
        <>
            <CustomModal
                open={open}
                handleCloseModal={handleCloseModal}
                title={"Mais informações de " + restaurant.name}
                content={
                    <>
                        <Typography variant="body2">
                            {restaurant.description}
                        </Typography>
                        <Typography marginY>
                            <strong>Horário de funcionamento: </strong>
                            {restaurant.opening_hours}
                        </Typography>
                        <Typography marginY>
                            <strong>Endereço: </strong>
                            {restaurant.formatted_address}
                        </Typography>
                    </>
                }
            />
        </>
    );
}

export default RestaurantMoreInfoModal;
