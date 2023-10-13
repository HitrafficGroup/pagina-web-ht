import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import emailjs from '@emailjs/browser';
import { Button } from "@mui/material";
export default function FormularioCotizacion() {

    const [open, setOpen] = useState(false);
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarEmailJs = () => {
        const templateParams = {
            from_name: `${nombre} ${apellido}`,
            message: mensaje,
            numero: numero,
            correo: email,
            producto: "plataforma",

        };
        emailjs.send('service_5ta3uir', 'template_sg3oltu', templateParams, '__kIJxAY6uzbb1RzE').then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
        setOpen(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
    };



    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle><h1 style={{ display: "flex", justifyContent: "center" }}>Cotizacion</h1></DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <p>
                            Llene el formulario de cotizacion y un asesor de ventas se contactara con usted, por correo
                            o directamente por su numero de telefono.
                        </p>
                        <Stack direction={"row"} spacing={2}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre"
                                type="text"
                                fullWidth
                                onChange={(event) => {
                                    setNombre(event.target.value);
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Apellido"
                                type="text"
                                fullWidth
                                onChange={(event) => {
                                    setApellido(event.target.value);
                                }}
                            />
                        </Stack>
                        <TextField
                            required
                            id="outlined-required"

                            label="Direccion de Correo"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            type="email"
                        />
                        <TextField
                            required
                            id="outlined-required"

                            label="Telefono"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneEnabledIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(event) => {
                                setNumero(event.target.value);
                            }}
                            type="email"
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Mensaje"
                            multiline
                            maxRows={4}
                            onChange={(event) => {
                                setMensaje(event.target.value);
                            }}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={enviarEmailJs}>Cotizar</Button>
                </DialogActions>
            </Dialog>
            <Button color="primary" variant="outlined" onClick={handleClickOpen} >
                cotizar
            </Button>
        </>
    );
}