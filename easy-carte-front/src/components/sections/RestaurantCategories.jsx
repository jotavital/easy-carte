import { CircularProgress, Grid, Icon } from "@mui/material";
import RoundedIconAvatar from "../misc/RoundedIconAvatar";
import { useState, useEffect } from 'react';
import { apiClient } from "../../providers/apiClient";

function RestaurantCategories() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        apiClient.get('/restaurant-categories')
            .then(({ data }) => {
                console.log(data);
                setCategories(data);
                setIsDataLoaded(true);
            })
    }, []);

    return (
        <Grid container gap padding justifyContent='center'>
            {!isDataLoaded ?
                <CircularProgress />
                :
                categories.map((category) => {
                    return <RoundedIconAvatar
                        key={category.id}
                        icon={<Icon>{category.icon}</Icon>}
                        subtitle={category.name}
                    />
                })
            }
        </Grid>
    );
}

export default RestaurantCategories;