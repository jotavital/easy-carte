import { useParams } from "react-router-dom";
import { apiClient } from "../../providers/apiClient";

function Restaurants() {
    const params = useParams();

    apiClient.get('city/' + params.city_url + '/restaurants')
        .then(({ data }) => {
            console.log(data);
        })

    return (
        <>
        </>
    );
}

export default Restaurants;