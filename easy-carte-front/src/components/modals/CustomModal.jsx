import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material';

export default function CustomModal({ title = "Informação", content, open, handleCloseModal }) {
    return (
        <Grid item container>
            <Dialog
                onClose={handleCloseModal}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    {title}
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {content}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}