import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";



const CustomDialog = ({ open, setOpen, p }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}>
                <DialogTitle
                    variant="h5"
                    value={p?.name}
                    style={{ cursor: 'move', marginLeft: 25 }}>
                    <strong>{p?.name}</strong>
                </DialogTitle><br />
                <DialogContent >
                    <img
                        style={{ width: 500, height: 300, marginLeft: 25, border: "solid" }}
                        src={p?.image}
                        alt={p?.name}
                    />
                </DialogContent>
                <DialogContent>
                    <Typography style={{ marginLeft: 25 }}>
                        <strong>{p?.description}</strong>
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CustomDialog;