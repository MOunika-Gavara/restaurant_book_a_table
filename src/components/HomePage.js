import { AppBar, ListItemButton, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./HomePage.css"
import restt5 from "../images/restt5.jpg";
import restt3 from "../images/restt3.jpg";
import Carousel from 'react-material-ui-carousel'
import Avatar from '@mui/material/Avatar';
import { auth } from "../Firebase"


const headerList = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Menu",
        path: "/menu"
    },
    {
        title: "Restaurants",
        path: "/restaurant"
    }
]

const HomePage = () => {

    return (
        <div >
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5" style={{ marginRight: 650 }}>
                        <strong>Book Your Restaurant</strong>
                    </Typography>

                    {headerList.map((h) => (
                        <NavLink to={h.path} className="link" style={{ textAlign: "right" }} >
                            <ListItemButton>
                                <strong>{h.title}</strong>
                            </ListItemButton>
                        </NavLink>
                    ))}

                    <Button
                        onClick={() => auth.signOut()}>
                        <Avatar>M</Avatar>
                    </Button>
                </Toolbar>
            </AppBar>
            <Carousel >
                <div className="div">
                    <img
                        className="img"
                        style={{ marginTop: 60, width: 1295, height: 500 }}
                        src={restt3}
                        alt="home page"></img>
                    <div className="centered">
                        <Typography
                            variant="h3">
                            <strong>Meet,Eat & <br /> Enjoy the True Taste</strong></Typography>
                        <Typography
                            style={{ marginTop: 10, fontStyle: "oblique" }}>
                            Making a reservation at delicious restaurant is easy<br />
                            and takes just a couple of minutes
                        </Typography>
                        {/* <Button variant="contained"
                            style={{ backgroundColor: "#3e4444", marginTop: 30 }}>
                            <strong>Explore Now</strong>
                        </Button> */}
                    </div>
                </div>
                <div>
                    <img
                        className="img"
                        style={{ marginTop: 60, width: 1290, height: 500, borderBottom: "solid" }}
                        src={restt5}
                        alt="home page">
                    </img>
                    <Typography
                        variant="h4"
                        className="centered">Enjoy your healthy delicious meal</Typography>
                    <Typography variant="h2"
                        className="centered" style={{ marginTop: 60 }}>Treat Yourself</Typography>
                </div>
            </Carousel>
        </div>
    )
}
export default HomePage;