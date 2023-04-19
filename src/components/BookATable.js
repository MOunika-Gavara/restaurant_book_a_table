import { AppBar, Toolbar, Typography, Grid, CardContent, TextField, Button } from "@mui/material";
import "./BookATable.css"
import bookatable3 from "../images/bookatable3.jpg";
import "./OrderOnline.css"


const TablePage = () => {

    return (
        <div>
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <strong>Reserve Your Table</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <img
                style={{ marginTop: 60, width: "100%", height: 500, filter: "brightness(65%)" }}
                src={bookatable3}
                alt="home page"></img>
            <Grid style={{ marginTop: 50 }} className="left">
                <div
                    variant="outlined"
                    style={{ width: 800, height: 500, marginLeft: 50 }}>
                    <div className="typography" style={{ marginTop: 50 }}>
                        <Typography><strong>Name</strong></Typography>
                        <Typography style={{ marginLeft: 280 }}>
                            <strong>ContactNo</strong></Typography>
                    </div>
                    <CardContent className="textfield" >
                        <TextField
                            variant="filled"
                            type="text"
                        />
                        <TextField
                            variant="filled"
                            type="text"
                        />
                    </CardContent>
                    <div className="typography">
                        <Typography>
                            <strong>No. of guests</strong></Typography>
                        <Typography style={{ marginLeft: 260 }}>
                            <strong>Email</strong></Typography>
                    </div>
                    <CardContent className="textfield">
                        <TextField
                            variant="filled"
                            type="number" />
                        <TextField
                            variant="filled"
                            type="email"
                        />
                    </CardContent>
                    <div className="typography">
                        <Typography style={{ marginRight: 50 }}>
                            <strong>Date</strong></Typography>
                        <Typography style={{ marginLeft: 250 }}>
                            <strong>Time</strong></Typography>
                    </div>
                    <CardContent className="date">
                        <TextField
                            style={{ width: 235 }}
                            variant="filled"
                            type="Date" />
                        <TextField
                            style={{ width: 235 }}
                            variant="filled"
                            type="time" />
                    </CardContent>
                    <Button
                        className="button"
                        variant="contained"
                        style={{ marginTop: 100, backgroundColor: "#3e4444" }}>Book
                    </Button>
                </div >
            </Grid >
        </div >
    )
}
export default TablePage;