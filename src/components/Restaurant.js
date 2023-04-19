import { useState, useEffect } from "react"
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, CardContent, Button, TextField } from "@mui/material";
import { db } from "../Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import "./Restaurant.css"
import "./OrderOnline.css"
import CustomDialog from "./CustomDialog";
import bookatable3 from "../images/bookatable3.jpg";


const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [search, setSearch] = useState("");
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const restaurantList = [];

    useEffect(() => {

        const q = query(collection(db, 'restaurant'));

        const unsub = onSnapshot(q, (querySnapshot) => {
            let famousRestaurants = [];
            querySnapshot.forEach((doc) => {
                famousRestaurants.push({ ...doc.data(), id: doc.id });
            });
            setRestaurant(famousRestaurants);
        });
        return () => unsub();
    }, []);
    console.log(restaurant, "rrrr")

    restaurant.map((r) => (
        restaurantList.push({
            id: r.id,
            image: r.image,
            name: r.name,
            location: r.location,
            description: r.description
        })
    ))

    const searchItems = (event) => {
        setSearch(event.target.value);

        if (event.target.value !== "") {
            const filteredImages = restaurantList.filter((l) => {
                return Object
                    .values(l)
                    .join("")
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase());

            })
            setFilterRestaurant(filteredImages);
        }
        else {
            setFilterRestaurant(restaurantList);
        }
    }

    return (
        <div>
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <strong>Restaurants</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <img
                style={{ marginTop: 10, width: "100%", height: 400, filter: "brightness(65%)" }}
                src={bookatable3}
                alt="home page"></img>
            <div style={{ color: "black" }} className="centered1">
                <TextField
                    style={{ backgroundColor: "white" }}
                    placeholder="Search your fav restaurant...."
                    value={search}
                    onChange={searchItems}>
                </TextField>
               
            </div>
            <Grid
                container
                sx={{ marginTop: 10 }}>
                {search.length > 1 ? filterRestaurant.map((f) => (
                    <div className="div1" key={f.id}
                        onClick={() => {
                            setOpen(true);
                            setSelectedData(f);
                        }}>
                        <Card variant="outlined" sx={{ width: 280 }} >
                            <CardContent >
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: 'md', mt: 2, textAlign: "center" }}>
                                    <strong>{f.name}</strong>
                                </Typography>
                                <Typography
                                    sx={{ mt: 0.5, mb: 2, textAlign: "center" }}>
                                    {f.location}
                                </Typography>
                                <CardMedia
                                    sx={{ width: 280, height: 280, justifyItem: "center" }}
                                    component="img"
                                    image={f.image}
                                />
                            </CardContent>
                            <div style={{ display: "flex", flexDirection: "row", gridGap: 50 }} >
                                <NavLink to="/table" className="link" >
                                    <Button variant="contained"
                                        className="button"
                                        style={{ backgroundColor: "#3e4444" }}>book a table
                                    </Button>
                                </NavLink>
                                <NavLink to="/order" className="link" >
                                    <Button
                                        className="button"
                                        variant="contained"
                                        style={{ backgroundColor: "#3e4444" }}
                                    >Order</Button>
                                </NavLink>
                            </div>
                        </Card>
                    </div>
                )) : (restaurantList.map((l, index) => (
                    <div
                        className="div1"
                        onClick={() => {
                            setOpen(true);
                            setSelectedData(l);
                        }} key={l.id}>
                        <Card variant="outlined" sx={{ width: 280 }}>
                            <CardContent className="bottom-left">
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "center" }}>
                                    <strong>{l.name}</strong>
                                </Typography>
                                <Typography
                                    sx={{ mb: 2, textAlign: "center" }}>
                                    {l.location}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                sx={{ width: 280, height: 280, justifyItem: "center", marginTop: 7 }}
                                component="img"
                                image={l.image}
                            />
                            <div style={{ display: "flex", flexDirection: "row", gridGap: 50 }} >
                                <NavLink to="/table" className="link" >
                                    <Button
                                        className="button"
                                        variant="contained"
                                        style={{ backgroundColor: "#3e4444", marginTop: 30 }}
                                    >book a table</Button>
                                </NavLink>
                                <NavLink to="/order" className="link" >
                                    <Button
                                        className="button"
                                        variant="contained"
                                        style={{ backgroundColor: "#3e4444", marginTop: 30 }}
                                    >Order</Button>
                                </NavLink>
                            </div>
                        </Card>
                    </div>

                )))
                }
                <CustomDialog open={open} setOpen={setOpen} p={selectedData} />
            </Grid >
        </div >
    )
}
export default Restaurant;