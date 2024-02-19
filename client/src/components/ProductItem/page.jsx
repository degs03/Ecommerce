'use client'
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/carts/cartSlice";


const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
        //---------------------CART STORAGE----------------------------------->
        const handleAddItemToCart = () => {
            dispatch(addToCart(product))
            console.log(product);
        }
    return (
        <Grid item sm={6} md={4} lg={3} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Card >
                <CardMedia
                    sx={{ width: { lg: '260px', md: '200px', sm: '260px', xs: '100%' }, height: '350px' }}
                    component="img"
                    src={product.image[0]}
                    alt="Product Image"
                />
                <CardContent>
                    <Typography variant="body2" sx={{ fontWeight: 'bolder' }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price} $
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <ShoppingCartCheckoutOutlinedIcon onClick={ handleAddItemToCart} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductItem;