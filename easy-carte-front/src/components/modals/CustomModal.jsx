import CloseIcon from "@mui/icons-material/Close";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
} from "@mui/material";

export default function CustomModal({
    title = "Informação",
    content,
    open,
    handleCloseModal,
    maxWidth = "sm",
    fullWidth = true,
}) {
    return (
        <Grid item container>
            <Dialog
                maxWidth={maxWidth}
                fullWidth={fullWidth}
                onClose={handleCloseModal}
                aria-labelledby="customized-dialog-title"
                open={open}
                scroll="body"
            >
                <DialogTitle>
                    {title}
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            position: "absolute",
                            right: 10,
                            top: 12,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>{content}</DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}
