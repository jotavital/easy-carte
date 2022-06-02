import { Grid } from '@mui/material';
import CenterWrapper from './CenterWrapper';

function MainWrapper({ children }) {
    return (
        <Grid className='main-wrapper'>
            <CenterWrapper>
                {children}
            </CenterWrapper>
        </Grid>
    );
}

export default MainWrapper;