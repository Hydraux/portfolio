import { Button, Dialog, DialogTitle, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { API } from "../api";

function sendEmail(from,body){
    const emailData = {
        from: from,
        body: body,
    };

    const options = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(emailData)
    };

    console.log(options.body);

    fetch(API, options)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error));
}


export default function HireDialog({ onClose, open }) {
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')

    const handleClose = () => {
        onClose();
    }
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Enter your information</DialogTitle>
            <TextField required id='Sender' label='Your email' variant="outlined" onChange={e => { setEmail(e.target.value) }} />
            <TextField required id='Note' label='Comment' variant="outlined" onChange={e => { setNote(e.target.value) }} />
            <Button onClick={()=>sendEmail(email,note)}>Send!</Button>

        </Dialog>
    );
}