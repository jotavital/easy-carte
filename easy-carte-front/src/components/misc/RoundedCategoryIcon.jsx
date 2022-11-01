import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function RoundedCategoryIcon({ categoryId = 0, icon, subtitle }) {
    const [searchParams, setSearchParams] = useSearchParams();
    // eslint-disable-next-line
    const isCategorySelected =
        !!(searchParams.get("category") == categoryId) ||
        (!searchParams.get("category") && subtitle === "Todas");

    const handleCategoryChange = (categoryId) => {
        var newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("category", categoryId);
        setSearchParams(newSearchParams.toString());
    };

    return (
        <IconButton onClick={() => handleCategoryChange(categoryId)}>
            <Grid justifyContent="center">
                <Grid justifyContent="center" container item xs={12}>
                    <Avatar
                        sx={{
                            bgcolor: isCategorySelected ? "secondary.main" : "",
                        }}
                    >
                        {icon}
                    </Avatar>
                </Grid>
                <Grid textAlign="center" item xs={12}>
                    <Typography variant="subtitle2">{subtitle}</Typography>
                </Grid>
            </Grid>
        </IconButton>
    );
}

export default RoundedCategoryIcon;
