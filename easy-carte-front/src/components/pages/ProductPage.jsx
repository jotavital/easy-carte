import { Grid } from '@mui/material';
import Image from '../images/Image';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiClient } from '../../providers/apiClient';
import CustomLoading from '../misc/CustomLoading';

function ProductPage() {
    const [product, setProduct] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const { product_id } = useParams();

    useEffect(() => {
        apiClient.get('products/' + product_id)
            .then(({ data }) => {
                setProduct(data);
                setIsDataLoaded(true);
                console.log(data);
            });
    }, [product_id]);

    return (
        <Grid className="bg-lightgray" justifyContent='center' padding container>
            {!isDataLoaded ?
                <CustomLoading />
                :
                <>
                    <Grid padding={2} item xs={6}>
                        <Image src={product.main_image} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4'>
                            {product.name}
                        </Typography>
                        <Typography variant='body'>
                            {product.description}
                        </Typography>
                        <Typography variant='h4' fontWeight='bold'>
                            {product.formatted_price}
                        </Typography>
                    </Grid>
                </>
            }
        </Grid>
    );
}

export default ProductPage;