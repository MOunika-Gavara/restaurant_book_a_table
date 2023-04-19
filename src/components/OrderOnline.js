import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { AppBar, Toolbar, Typography, Grid, Card, CardMedia, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
import "./OrderOnline.css";
import { Link } from "react-router-dom";


const OrderOnline = () => {
    const [orderFood, setOrderFood] = useState([]);
    const onlineFood = [];
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);
    const [image, setImage] = useState([]);

    useEffect(() => {

        const q = query(collection(db, 'restaurant'));

        const unsub = onSnapshot(q, (querySnapshot) => {
            let food = [];
            querySnapshot.forEach((doc) => {
                food.push({ ...doc.data(), id: doc.id });
            });
            setOrderFood(food);
        });
        return () => unsub();

    }, []);
    console.log(orderFood, "fff")
    orderFood.map((o) => (
        onlineFood.push({
            food: o.food,
            price: o.price,
            title: o.title
        })
    ))
    console.log(onlineFood, "ddd")

    const addToCart = id => {
        setCart((currentCart) => [...currentCart, id]);
        setCount(count + 1)
    };
    console.log(cart, "ccccc")

    // const removeFromCart = (id) => {
    //     setCount(Math.max(count - 1, 0));
    // }
    const fullImage = (id) => {
        setImage((currentCart) => [...currentCart, id]);
    }


    return (
        <div>
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <strong>Order</strong>
                    </Typography>
                    {console.log(cart, "details")}
                    <Link to={{ pathname: '/cart' }}
                        state={{ cart: cart }}
                        style={{ color: "white" }}>
                        <Badge color="error" badgeContent={count}>
                            <ShoppingCartIcon style={{ marginLeft: 1100 }} />
                        </Badge>
                    </Link>
                </Toolbar>
            </AppBar>
            <Grid
                container
                sx={{ marginTop: 10 }}>
                {onlineFood.map((f) => (
                    <div style={{ padding: "1rem", marginTop: 50 }} key={f.id}>
                        <div style={{ padding: "1rem", marginLeft: 100 }}>
                            <Card variant="outlined" sx={{ width: 250 }} >
                                <Link to={{ pathname: '/cart' }}
                                    state={{ food: image.food }}> <CardMedia
                                        onClick={fullImage}
                                        sx={{ width: 250, height: 250, justifyItem: "center" }}
                                        component="img"
                                        image={f.food}
                                    />
                                </Link>
                            </Card>
                            <div style={{display:"inline"}}>
                                <Typography variant="h6">{f.title}</Typography>
                                <Typography variant="h6">₹{f.price}</Typography>
                            </div>
                            <Button variant="contained"
                                className="button"
                                style={{ backgroundColor: "#3e4444", marginTop: 20 }}
                                onClick={() => addToCart(f)} >Add to cart
                            </Button>
                            {/* <ButtonGroup style={{ backgroundColor: "rgba(255, 0, 0, 0.76)", gridGap: 50, color: "white", height: 25 }} className="button">
                                <RemoveIcon
                                    onClick={() => removeFromCart(f)}
                                    fontSize="small" />
                                <AddIcon
                                    onClick={() => { setCount(count + 1) }}
                                    fontSize="small" />
                            </ButtonGroup> */}
                        </div>
                    </div>
                ))}
            </Grid>

        </div>
    )
}
export default OrderOnline;