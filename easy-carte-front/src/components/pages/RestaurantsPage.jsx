import { useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../providers/apiClient";
import { CircularProgress } from '@mui/material';

function RestaurantsPage() {
    const params = useParams();
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    apiClient.get('city/' + params.city_url + '/restaurants')
        .then(({ data }) => {
            console.log(data);
        })

    if(!isDataLoaded){
        return <CircularProgress />;
    }

    return (
        <>
        </>
    );
}

export default RestaurantsPage;