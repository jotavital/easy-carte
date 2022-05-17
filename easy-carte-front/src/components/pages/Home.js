import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { apiClient } from '../../providers/apiClient';

function Home() {

    function logar() {
        console.log("vo loga");

        apiClient.get('/user')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Grid container>
            <Typography variant="h2">
                Home.js
            </Typography>
            <button onClick={logar}>test</button>
        </Grid>
    );
}

export default Home;