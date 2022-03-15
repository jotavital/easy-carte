import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <Grid container>
            <AppBar position="static" color='warning'>
                <Toolbar>
                    <Grid item xs={2} justifyContent='center'>
                        <Typography textAlign='center' variant='h4'>LOGO</Typography>
                    </Grid>
                    <Grid container>
                        <Button className='text-white' component={RouterLink} to='/' underline='none'>
                            Home
                        </Button>
                    </Grid>
                    <Button className='text-white' component={RouterLink} to='/login' underline='none'>
                        Login
                    </Button>
                    <Button className='text-white' component={RouterLink} to='/register' underline='none'>
                        Cadastro
                    </Button>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};

export default NavBar;