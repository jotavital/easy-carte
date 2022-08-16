import { Button, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function RestaurantMoreInfoModal({ restaurant }) {
    return (
        <CustomModal
            openElement={
                <Button startIcon={<AddCircleOutlineIcon />}>
                    <Typography>Mais informações</Typography>
                </Button>
            }
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
    );
}

export default RestaurantMoreInfoModal;