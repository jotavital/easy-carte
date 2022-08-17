import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiClient } from '../../providers/apiClient';
import CustomLoading from '../misc/CustomLoading';
import CustomModal from './CustomModal';
import Image from '../images/Image';

function ProductModal({ open, handleCloseModal, product }) {
    return (
        <CustomModal
            title={(product) ? 'Detalhes do produto: ' + product.name : null}
            open={open}
            handleCloseModal={handleCloseModal}
            content={
                <Grid justifyContent='center' padding container>
                    {!product ?
                        <Typography>Erro ao carregar dados, tente novamente.</Typography>
                        :
                        <>
                            <Grid padding={2} item xs={6}>
                                <Image src={product.main_image} />
                            </Grid>
                            <Grid padding item xs={6}>
                                <Typography marginY variant='h4'>
                                    {product.name}
                                </Typography>
                                <Typography marginY variant='body'>
                                    {product.description}
                                </Typography>
                                <Typography marginY variant='h5' fontWeight='bold'>
                                    {product.formatted_price}
                                </Typography>
                            </Grid>
                        </>
                    }
                </Grid>
            }
        />
    );
}

export default ProductModal;