'use client'
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Fab, Grid, Toolbar, Typography, styled } from "@mui/material";
import QueueIcon from '@mui/icons-material/Queue';
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectRol } from '@/lib/features/users/userSlice';
import { useRouter } from "next/navigation";
import tshirt from '/public/images/tshirt.jpg';
import urban from '/public/images/Urban.jpg';
import formal from '/public/images/Formal.jpg';
import sport from '/public/images/Sport.jpg';
import styles from "./page.module.css";
import Image from "next/image";
import { Inter } from 'next/font/google';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
});
const CustomFont = Inter({
    weight: '400',
    subsets: ['latin'],
    fontStyle: "normal"
});
const Principal = () => {
    const dispatch = useAppDispatch();
    const rol = useAppSelector(selectRol);
    console.log(rol);
    const router = useRouter();
    return (
        <Fragment>
            <Grid container maxWidth="100vw" >
                {
                    rol === 'admin' ?
                        <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0, boxShadow: 'none' }}>
                            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <StyledFab color="secondary" aria-label="add" fullWidth variant="contained" sx={
                                    {
                                        height: '50px', width: { xs: '97%', sm: '97%', md: '200px' },
                                        mb: 3,
                                        borderRadius: '50px',
                                        backgroundColor: '#946FB5',
                                        '&:hover': {
                                            backgroundColor: '#946FB5',
                                        },
                                    }
                                }
                                    onClick={() => { router.push('/newPost') }}
                                >
                                    <QueueIcon sx={{ height: '30px', width: '30px' }} />
                                </StyledFab>
                                <Box sx={{ flexGrow: 1 }} />
                            </Toolbar>
                        </AppBar> : rol != 'user' || rol === '' ?
                            null :
                            null
                }
                <Grid container sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item sx={{
                        height: { sm: '100%', md: '100%', xs: "100%" },
                        width: { sm: '100%', md: '50%', xs: "100%" },
                        display: 'flex',
                        p: { md: 10, xs: 5 },
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '100vh',
                        background: { sm: 'transparent', md: '#EBE4F1', xs: "transparent" },
                        backdropFilter: "blur(2.5px)",

                    }}>
                        <Grid item sx={{ mb: { xs: 2, sm: 4, md: 2 } }}>
                            <Typography className={CustomFont.className} sx={{
                                fontSize: { xs: 40, sm: 40, md: 70 },
                                textAlign: 'initial'
                            }} >
                                WEAR YOUR ATITTUDE
                            </Typography>
                            <Typography className={CustomFont.className} sx={{
                                fontSize: { xs: 40, sm: 47, md: 50 },
                                textAlign: 'initial',
                                fontWeight: 'bolder'
                            }}>
                                EXPRESS YOUR STYLE!
                            </Typography>
                        </Grid>
                        <Grid item sx={{ width: 1, justifyContent: 'center' }}>
                            <Button sx={{
                                background: "#C2AFD4",
                                borderRadius: 3,
                                color: "white",
                                height: 50,
                                width: { sm: 150, xs: 200, md: 200 },
                                padding: "0 30px",
                                boxShadow: "0 3px 5px 2px #B8A2CD",
                                '&:hover': {
                                    backgroundColor: '#946FB5',
                                }
                            }}
                                onClick={() => { router.push('/shop') }}
                            >Shop Now</Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={{
                        height: { sm: '100%', md: '100%', xs: "100%" },
                        width: { sm: '100%', md: '50%', xs: "100%" },
                        position: { xs: 'absolute', sm: 'absolute', md: 'inherit' },
                        zIndex: { xs: -1, sm: -1, md: 1 },
                        height: '100vh'
                    }}>
                        <Image
                            className={styles.image}
                            src={tshirt}
                            alt="Image Background T-Shirt"
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{
                    height: '100vh',
                    width: '100vw'
                }}>
                    <Grid item sx={{ width: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                        <Typography
                            sx={{ fontSize: { xs: 40, sm: 40, md: 70 }, textAlign: 'center' }}
                        >
                            New Colection
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Optio quod nulla cupiditate quaerat dignissimos veniam et earum.
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} sx={{ width: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Principal;