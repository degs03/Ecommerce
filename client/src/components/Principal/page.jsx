'use client'
import { Box, Button, CardMedia, Container, Grid } from "@mui/material";
import title from '/public/images/title.PNG';
import tshirt from '/public/images/shirt.PNG';
import Image from "next/image";
import { Fragment } from "react";
const Principal = () => {
    return (
        <Fragment>
            <Container maxWidth="lg">
                <Grid container >
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <Grid item xs={5.5} sm={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <CardMedia>
                                <Image
                                    src={title}
                                    alt="Descripción de la imagen"
                                    layout="responsive"
                                />
                            </CardMedia>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    borderRadius: '50px',
                                    p: 2,
                                    backgroundColor: '#A2A0D5',
                                    '&:hover': {
                                        backgroundColor: '#A2A0D5',
                                    },
                                }}
                            >
                                Shop Now
                            </Button>
                        </Grid>
                        <Grid item xs={6.5} sm={6}>
                            <CardMedia>
                                <Image
                                    src={tshirt}
                                    alt="Descripción de la imagen"
                                    layout="responsive"
                                />
                            </CardMedia>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12} sm={4}>
                        <CardMedia>
                            <Image
                                src={tshirt}
                                alt="Descripción de la imagen"
                                layout="responsive"
                            />
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardMedia>
                            <Image
                                src={tshirt}
                                alt="Descripción de la imagen"
                                layout="responsive"
                            />
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardMedia>
                            <Image
                                src={tshirt}
                                alt="Descripción de la imagen"
                                layout="responsive"
                            />
                        </CardMedia>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Principal;