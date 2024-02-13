"use client"
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './page.module.css';
import { db, storage } from '@/firebase/config';
import { addDoc, collection, serverTimestamp, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Button, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { usePostContext } from '../../app/context/PostContext';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Dropzone = ({ onFilesUploaded }) => {
    const [files, setFiles] = useState([]);
    const { setDownloadURLs } = usePostContext();
    let downloadURLs = [];

    const uploadPost = async () => {
        const docRef = await addDoc(collection(db, "post"), {
            timestamp: serverTimestamp()
        });
        await Promise.all(
            files.map(async image => {
                const imageRef = ref(storage, `post/${docRef.id}/${image.path}`);
                await uploadBytes(imageRef, image, "data_url");
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "post", docRef.id), {
                    images: arrayUnion(downloadURL)
                });
                downloadURLs.push(downloadURL);
                downloadURLs === undefined ?
                    onFilesUploaded(false) :
                    onFilesUploaded(true)
            })
        );
        setDownloadURLs(downloadURLs);
        setFiles([]);
    };
    const handleDeleteFile = (file) => {
        setFiles(prevFiles => prevFiles.filter(f => f !== file));
    };
    // Funcion que recibe los archivos aceptados y rechazados
    const onDrop = useCallback(acceptedFiles => {
        // Si hay archivos aceptados, se asignaran en el useState tomando los valores anteriores para agregarle los nuevos
        if (acceptedFiles?.length) {
            setFiles(previousFiles => [
                ...previousFiles,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }
    }, [])

    // Se activa cuando el usuario suelta el archivo
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    })
    // getRootProps y getInputProps son dos funciones que retornan objetos con propiedades que se utilizan para crear el dropzone
    return (
        <Fragment>
            <div {...getRootProps({ // Todos los atributos se pasan por la funcion getRootProps para evitar sobreescribir sus atributos
                className: styles.dropzone
            })}>
                <TextField {...getInputProps()} />
                {isDragActive ? // Detecta si el usuario esta arrastrando un archivo
                    <CloudUploadIcon sx={{ color: 'white' }} /> : <CloudUploadIcon sx={{ color: 'white' }} />
                }
            </div>
            {/* Preview */}
            <Grid container sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
                {files.map((file, idx) => (
                    <Grid container key={idx} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        my: 0.3,
                        p: 1,
                        border: "1px solid",
                        borderRadius: '50px',
                        color: 'white'
                    }}>
                        <Typography sx={{ color: "white", display: 'flex' }}><ImageIcon size="small" />{file.name}</Typography>
                        <DeleteIcon size='small' sx={{ color: "white" }} onClick={() => handleDeleteFile(file)} />
                    </Grid>
                ))}
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Button onClick={uploadPost}
                    sx={{
                        mt: 3,
                        borderRadius: '50px',
                        backgroundColor: '#946FB5',
                        '&:hover': {
                            backgroundColor: '#946FB5',
                        },
                        color: 'white'
                    }}
                >
                    Guardar Imagenes
                </Button>
            </Grid>
        </Fragment>
    )
};

export default Dropzone;
