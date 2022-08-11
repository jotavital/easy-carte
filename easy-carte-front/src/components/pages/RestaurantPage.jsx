import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Grid, Typography, CardContent, Box } from '@mui/material';
import CustomLoading from '../misc/CustomLoading';
import { apiClient } from '../../providers/apiClient';
import RestaurantOpeningHours from '../text/RestaurantOpeningHours';
import RestaurantRating from '../misc/RestaurantRating';
import ProductCard from '../cards/ProductCard';

function RestaurantPage() {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [products, setProducts] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [areProductsLoaded, setAreProductsLoaded] = useState(false);

    useEffect(() => {
        apiClient.get('/restaurants/' + restaurant_id)
            .then(({ data }) => {
                setRestaurant(data);
                setIsDataLoaded(true);
            });

        apiClient.get('/restaurants/' + restaurant_id + '/products')
            .then(({ data }) => {
                setProducts(data);
                setAreProductsLoaded(true);
                console.log(data);
            });
    }, [restaurant_id]);

    return (
        <Card>
            <CardContent component={Grid} container item justifyContent='center' paddingY={1}>
                {!isDataLoaded
                    ?
                    <CustomLoading />
                    :
                    <Grid>
                        <Grid container justifyContent='center'>
                            <Grid container>
                                <Grid item container alignItems='center' padding xs={4} sm={3} md={2}>
                                    <Box
                                        component="img"
                                        src={restaurant.logo_url}
                                        alt={restaurant.name}
                                        className="img-responsive img-rounded"
                                    />
                                </Grid>
                                <Grid item padding xs={8}>
                                    <Typography variant='h5'>
                                        {restaurant.name}
                                    </Typography>
                                    <RestaurantRating />
                                    <Typography variant='body2'>
                                        {restaurant.description}
                                    </Typography>
                                    <Grid container item marginTop>
                                        <RestaurantOpeningHours opening_hours={restaurant.opening_hours} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center' paddingY={2}>
                            <Typography paddingY variant='h4'>Produtos</Typography>
                            <Grid justifyContent='center' container item padding>
                                {!areProductsLoaded
                                    ?
                                    <CustomLoading />
                                    :
                                    products.map((product) => {
                                        return <ProductCard key={product.id} product={product} />
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </CardContent>
        </Card>
    );
}

export default RestaurantPage;