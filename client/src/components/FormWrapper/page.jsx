import { Fragment } from "react";
import Image from "next/image";
import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from "next/link";

const FormWrapper = ({ children }) => {
    const Copyright = (value) => {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...value}>
                {'Copyright © '}
                <Link
                    color="inherit"
                    href="/"
                    style={{
                        textDecoration: 'none',
                        boxShadow: 'none',
                        color: '#c23502'
                    }}>
                    FindYourPet
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography >
        );
    }
    return (
        <Fragment>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh">
                <Container component="main" maxWidth="xs" disableGutters={true} sx={{px:2}}>{/**Coloca como un componente MAIN y lo dejo su maxWidth a xs O 12 */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',   
                            p:2.5,
                            backgroundColor: 'rgba(248, 248, 248, 0.507)',
                            borderRadius: 3,
                            /** 
                            padding: 5,
                            mb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
            **/}}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#ED581D' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        {children}
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Container>
            </Box>
        </Fragment >
    )
}

export default FormWrapper;