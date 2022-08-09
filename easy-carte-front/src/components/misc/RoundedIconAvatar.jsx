import { Avatar, Grid, IconButton, Typography } from "@mui/material";

function RoundedIconAvatar({ icon, subtitle }) {
    return (
        <IconButton>
            <Grid justifyContent='center'>
                <Grid justifyContent='center' container item xs={12}>
                    <Avatar>
                        {icon}
                    </Avatar>
                </Grid>
                <Grid textAlign='center' item xs={12}>
                    <Typography variant="subtitle2">
                        {subtitle}
                    </Typography>
                </Grid>
            </Grid>
        </IconButton>
    );
}

export default RoundedIconAvatar;