import { Grid } from "@mui/material";
import HomeRestaurantsSection from "../sections/HomeRestaurantsSection";
import SearchInput from "../forms/inputs/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { selectCity } from "../../redux/appSlice";
import { useEffect, useState } from "react";
import CategoriesListWithIcon from "../lists/CategoriesListWithIcon";
import { apiClient } from "../../providers/apiClient";
import UserLocationText from "../text/UserLocationText";
import { useParams } from "react-router-dom";

function RestaurantsListPage() {
    const dispatch = useDispatch();
    const { city_url } = useParams();
    const isCitySelected = useSelector((state) => state.app.isCitySelected);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        apiClient.get("/restaurant-categories").then(({ data }) => {
            setCategories(data);
            setAreCategoriesLoaded(true);
        });
    }, []);

    if (!isCitySelected) {
        dispatch(selectCity(city_url));
    }

    return (
        <Grid container>
            <Grid padding container item justifyContent="space-between">
                <Grid
                    alignItems="center"
                    justifyContent={{ sm: "left", xs: "center" }}
                    padding
                    item
                    container
                    md={3}
                    sm={6}
                    xs={12}
                >
                    <UserLocationText />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <SearchInput />
                </Grid>
            </Grid>
            <CategoriesListWithIcon
                categories={categories}
                areCategoriesLoaded={areCategoriesLoaded}
            />
            <HomeRestaurantsSection cityUrl={city_url} />
        </Grid>
    );
}

export default RestaurantsListPage;
