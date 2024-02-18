'use client'
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, InputAdornment, MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import styles from "../UserForm/page.module.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAll } from "@/app/api/route";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const ShopPage = () => {
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState('All');
    const [sizeFilter, setSizeFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [search, setSearch] = useState('');
    const getProducts = async () => {
        try {
            const result = await getAll();
            console.log(result);
            setProduct(result);
            filterProducts(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const filterProducts = (products) => {
        //asigna todo lo de producto a filtered
        let filtered = [...products];
        if (sizeFilter !== 'All') {
            filtered = filtered.filter(item => item.size === sizeFilter);
        }
        if (categoryFilter !== 'All') {
            filtered = filtered.filter(item => item.category === categoryFilter);
        }
        if (search !== '') {
            //Sirve para considerar coincidencias parciales
            const searchLower = search.toLowerCase(); //lo coloca en minuscula 
            filtered = filtered.filter(item => item.title.toLowerCase().includes(searchLower));
        }
        if (priceFilter === 'Lower') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (priceFilter === 'Highest') {
            filtered.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(filtered);
    };


    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        filterProducts(product);
    }, [priceFilter, sizeFilter, categoryFilter, product, search]);


    const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
    };
    const handleSizeFilterChange = (event) => {
        setSizeFilter(event.target.value);
    };
    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };
    const handleSearchFilterChange = (event) => {
        setSearch(event.target.value);
    };


    const sty = {
        color: '#FFFF',
        '& label.Mui-focused': {
            color: 'black',
            borderColor: 'black'
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                color: 'black',
                borderColor: 'black'
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        width: { xs: '90vw', sm: '300px', md: "180px", lg: '250px' },
    };
    const styFil = {
        color: '#FFFF',
        '& label.Mui-focused': {
            color: 'black',
            borderColor: 'black'
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                color: 'black',
                borderColor: 'black'
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        width: "100%"
    };

    return (
        <Fragment>
            <Toolbar sx={{ height: '80px' }} />
            <Container maxWidth="xl">
                <Grid container sx=
                    {{
                        height: { sm: '15vh', xs: '12vh', md: '100vh' },
                        display: 'flex',
                        width: 1,
                        alignItems: { md: 'flex-start', sm: 'center', xs: 'center' },

                    }}>
                    <Grid item md={2.5} sm={12} xs={12}>
                        <Grid item sx={{
                            display: 'flex', position: { md: 'fixed', sm: 'inherit', xs: 'inherit' },
                            alignItems: 'center',
                            justifyContent: { md: 'center', sm: 'space-between' },
                            flexDirection: { md: 'column', sm: 'row-reverse', xs: 'column' }
                        }} >
                            <Grid item>
                                <TextField
                                    onChange={handleSearchFilterChange}
                                    InputProps={{
                                        className: styles.input,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={sty}
                                    name="search"
                                    label="Search"
                                />
                            </Grid>
                            <Grid item>
                                <Accordion sx={{
                                    width: { xs: '90vw', sm: '200px', md: "180px", lg: '250px' },
                                    mb: 2, mt: 2
                                }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        Filtros
                                    </AccordionSummary>
                                    <AccordionDetails
                                    >
                                        <TextField
                                            select
                                            sx={styFil}
                                            defaultValue={'All'}
                                            name="size"
                                            label="Seleccione la talla"
                                            onChange={handleSizeFilterChange}
                                        >
                                            <MenuItem value="All">
                                                Select All
                                            </MenuItem>
                                            <MenuItem value="S">
                                                S
                                            </MenuItem>
                                            <MenuItem value="M">
                                                M
                                            </MenuItem>
                                            <MenuItem value="L">
                                                L
                                            </MenuItem>
                                            <MenuItem value="XL">
                                                XL
                                            </MenuItem>
                                        </TextField>
                                        <TextField
                                            select
                                            sx={styFil}
                                            style={{ marginTop: '20px' }}
                                            defaultValue={'All'}
                                            onChange={handleCategoryFilterChange}
                                            name="category"
                                            label="Categoria"
                                        >
                                            <MenuItem value="All">
                                                Select All
                                            </MenuItem>
                                            <MenuItem value="Casual">
                                                Casual
                                            </MenuItem>
                                            <MenuItem value="Deportivas">
                                                Deportiva
                                            </MenuItem>
                                            <MenuItem value="Street wear">
                                                Street Wear
                                            </MenuItem>
                                            <MenuItem value="Formales">
                                                Formal
                                            </MenuItem>
                                        </TextField>
                                        <TextField
                                            select
                                            sx={styFil}
                                            style={{ marginTop: '20px' }}
                                            defaultValue={'All'}
                                            name="price"
                                            label="Price"
                                            onChange={handlePriceFilterChange}
                                        >
                                            <MenuItem value="All">
                                                Select All
                                            </MenuItem>
                                            <MenuItem value="Lower">
                                                Lower
                                            </MenuItem>
                                            <MenuItem value="Highest">
                                                Highest
                                            </MenuItem>
                                        </TextField>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/**---------------------PRODUCTS SECTION-------------------------------------------> */}
                    <Grid item md={9.5} sm={12} xs={12} sx={{ height: '100vh', width: "100%" }}>
                        <Grid container sx={{ display: 'flex' }}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item, idx) => {
                                    return (
                                        <Grid item sm={6} md={4} lg={3} xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                            <Card key={idx}>
                                                <CardMedia
                                                    sx={{ width: { lg: '260px', md: '200px', sm: '260px', xs: '100%' }, height: '350px' }}
                                                    component="img"
                                                    src={item.image[0]}
                                                    alt="Product Image"
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" sx={{ fontWeight: 'bolder' }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.price} $
                                                    </Typography>
                                                </CardContent>
                                                <CardActions disableSpacing>
                                                    <IconButton aria-label="add to favorites">
                                                        <ShoppingCartCheckoutOutlinedIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="share">
                                                        <RemoveRedEyeOutlinedIcon />
                                                    </IconButton>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })) : (
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 4 }}>
                                    No se han encontrado resultados.
                                </Typography>)
                            }
                        </Grid>
                    </Grid>
 
                </Grid>
            </Container>
        </Fragment >
    );
}


export default ShopPage;
