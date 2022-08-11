import { Grid, Icon } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import RoundedCategoryIcon from "../misc/RoundedCategoryIcon";
import { useState, useEffect } from 'react';
import { apiClient } from "../../providers/apiClient";

function RestaurantCategories() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        apiClient.get('/restaurant-categories')
            .then(({ data }) => {
                setCategories(data);
                setIsDataLoaded(true);
            })
    }, []);

    if (!isDataLoaded) {
        return (
            <Grid container gap padding justifyContent='center'>
                <CustomLoading />
            </Grid>
        )
    } else {
        return (
            <Grid container gap padding justifyContent='center'>
                <RoundedCategoryIcon
                    icon={<Icon>star</Icon>}
                    subtitle='Todas'
                />
                {
                    categories.map((category) => {
                        return <RoundedCategoryIcon
                            key={category.id}
                            categoryId={category.id}
                            icon={<Icon>{category.icon}</Icon>}
                            subtitle={category.name}
                        />
                    })
                }
            </Grid>
        );
    }
}

export default RestaurantCategories;