import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiClient } from '../../providers/apiClient';
import CustomLoading from '../misc/CustomLoading';
import CustomModal from './CustomModal';
import Image from '../images/Image';

function ProductModal({ open, handleCloseModal, product }) {
    return (
        <CustomModal
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
            }
        />
    );
}

export default ProductModal;