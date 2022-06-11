import { Grid } from '@mui/material';
import CenterWrapper from './CenterWrapper';

function MainWrapper({ children }) {
    return (
        <Grid className='main-wrapper' paddingX={5}>
            <CenterWrapper>
                {children}
            </CenterWrapper>
        </Grid>
    );
}

export default MainWrapper;