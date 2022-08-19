import { Grid, Typography } from '@mui/material';
import CustomModal from './CustomModal';
import CustomDivider from '../misc/CustomDivider';
import CustomAccordion from '../misc/CustomAccordion';
import ImageSliderWithThumbs from '../images/ImageSliderWithThumbs';

function ProductModal({ open, handleCloseModal, product }) {
    return (
        <CustomModal
            title={(product) ? product.name : null}
            open={open}
            handleCloseModal={handleCloseModal}
            content={
                <Grid justifyContent='center' padding container>
                    {!product ?
                        <Typography>Erro ao carregar dados, tente novamente.</Typography>
                        :
                        <>
                            <Grid padding item sm={6}>
                                <ImageSliderWithThumbs />
                            </Grid>
                            <Grid padding item sm={6}>
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
                            <CustomDivider />
                            <Grid padding item sm={12}>
                                <Typography variant='h6'>
                                    Detalhes
                                </Typography>
                                {(product.ingredients) &&
                                    <CustomAccordion
                                        title="Ingredientes"
                                        content={
                                            <Typography>
                                                {product.ingredients}
                                            </Typography>
                                        }
                                    />
                                }
                                {(product.notes) &&
                                    <CustomAccordion
                                        title="Observações"
                                        content={
                                            <Typography>
                                                {product.notes}
                                            </Typography>
                                        }
                                    />
                                }
                            </Grid>
                        </>
                    }
                </Grid>
            }
        />
    );
}

export default ProductModal;