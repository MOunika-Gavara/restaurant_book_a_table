import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Card, CardMedia } from "@mui/material";
import "./CartPage.css";
import { useLocation } from "react-router";

const CartPage = () => {
    const location = useLocation();
    const cart = location.state.cart;
    const foodImage = location.state.food;

    const [cartTotal, setCartTotal] = useState(1);
    console.log(cart, "cartttttt")

    useEffect(() => {
        const total = () => {
            let totalVal = 0;
            for (let i = 0; i < cart.length; i++) {
                totalVal += cart[i].price;
            }
            setCartTotal(totalVal);
        };
        total();
    }, [cart]);


    return (
        <div>
            <AppBar style={{ backgroundColor: "#3e4444" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <strong>Cart</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Card
                container
                sx={{ marginTop: 10, width: 800, marginLeft: 20 }}>
                {cart && cart.map((c) => (
                    <div style={{ padding: "rem", display: "flex", flexDirection: "row", gridGap: 250 }} key={c.id}>
                        <Card variant="outlined"  >
                            <CardMedia
                                className="image"
                                sx={{ width: 200, height: 200, justifyItem: "center" }}
                                component="img"
                                image={c.food}
                            />
                        </Card>
                        <Typography variant="h6" style={{ marginTop: 50 }}>
                            <strong>{c.title}</strong>
                        </Typography>
                        <Typography variant="h6" style={{ marginTop: 50 }}>₹{c.price}</Typography>
                    </div>
                ))
                }
            </Card >
            <Typography style={{ marginTop: 50 }}>
                <strong>Total: ₹{cartTotal}</strong>
            </Typography>
        </div >
    )
}
export default CartPage;