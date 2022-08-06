import { Grid } from '@mui/material';

function MainWrapper({ children }) {
    return (
        <Grid className='main-wrapper' paddingX={5}>
            {children}
        </Grid>
    );
}

export default MainWrapper;