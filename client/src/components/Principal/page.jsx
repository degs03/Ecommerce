'use client'
import { Button, CardMedia, Container, Grid } from "@mui/material";
import title from '/public/images/title.PNG';
import tshirt from '/public/images/shirt.PNG';
import Image from "next/image";
import { Fragment } from "react";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectRol} from '@/lib/features/users/userSlice';
import { useRouter } from "next/navigation";
const Principal = () => {
    const dispatch = useAppDispatch();
    const rol = useAppSelector(selectRol);
    console.log(rol);
    const router = useRouter();
    return (
        <Fragment>
            <Container maxWidth="lg">
                {
                    rol === 'admin' ?
                        <Grid container sx={{ display: 'flex', position: 'sticky', top: { xs: "92vh", sm: "87vh" }, justifyContent: 'center' }}>
                            <Grid item sx={{ position: 'absolute' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={()=>{ router.push("/newPost")}}
                                    sx={{
                                        width: { xs: '90vw', sm: '200px' },
                                        p: { xs: 1, sm: 2 },
                                        borderRadius: '50px',
                                        backgroundColor: '#946FB5',
                                        '&:hover': {
                                            backgroundColor: '#946FB5',
                                        },
                                    }}
                                >
                                    Add Product <CheckroomIcon />
                                </Button>
                            </Grid>
                        </Grid> :
                        null
                }
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
                <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
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