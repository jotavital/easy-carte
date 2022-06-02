import { Grid } from '@mui/material';

function CenterWrapper({ children }) {
    return (
        <Grid>
            {children}
        </Grid>
    );
}

export default CenterWrapper;