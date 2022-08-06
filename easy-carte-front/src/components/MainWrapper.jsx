import { Grid } from '@mui/material';
import CenterWrapper from './CenterWrapper';

function MainWrapper({ children }) {
    return (
        <Grid className='main-wrapper' paddingX={5}>
            {children}
        </Grid>
    );
}

export default MainWrapper;