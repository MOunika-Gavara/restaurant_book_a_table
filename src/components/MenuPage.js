import { AppBar, Toolbar, Typography, Grid, Button } from "@mui/material";
import Breakfast from "../images/Breakfast.png";
import lunch2 from "../images/lunch2.jpg";
import dinner from "../images/dinner.jpg";
import menu5 from "../images/menu5.webp";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Card, CardMedia } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import snacks from "../images/snacks.webp"
import "./MenuPage.css"

const imageList = [
    {
        name: "Breakfast",
        image1: Breakfast

    },
    {
        name: "Lunch",
        image1: dinner
    },
    {
        name: "Snacks",
        image1: snacks
    },
    {
        name: "Dinner",
        image1: lunch2

    },
]
const menuList = ["Breakfast", "Lunch", "Snacks", "Dinner"];

const MenuPage = () => {
    const handleScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <strong>Menu</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="div">
                <img
                    className="img"
                    style={{ marginTop: 60, width: "100%", height: 400, filter: "brightness(70%)" }}
                    src={menu5}
                    alt="menu page"></img>
                <Typography
                    className="bottom"
                    variant="h3">
                    <strong>Breakfast and Brunch</strong>
                </Typography>
                <Typography
                    style={{ marginTop: 70 }}
                    className="bottom"
                    variant="h2">
                    <strong>Menu</strong>
                </Typography>
            </div>
            <Grid
                style={{ display: "flex", flexDirection: "row", gridGap: 50 }}
                container
                sx={{ marginTop: 10 }}>
                {menuList.map((m) => (
                    <div style={{ marginLeft: 150 }}>
                        <Button
                            onClick={handleScroll}
                            variant="contained" style={{ backgroundColor: "#3e4444" }}>
                            <strong>{m}</strong>
                        </Button>
                    </div>
                ))}
            </Grid >
            <div id="section-1" style={{ marginTop: 70 }}>
                {imageList.map((i) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            <Typography>
                                <strong>{i.name}</strong>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card variant="outlined" sx={{ width: 280, marginLeft: 60 }} >
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <CardMedia
                                        sx={{ width: 280, height: 280 }}
                                        component="img"
                                        image={i.image1}
                                    />
                                </div>
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div >
    )
}
export default MenuPage;

