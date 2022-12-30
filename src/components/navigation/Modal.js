import React from "react";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CustomButton from "../buttons/Button";
import FormOS from "../forms/FormOS";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};

export default function SimpleModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                sx={{
                    height: '5ch',
                    ml: 7,
                    mr: 5,
                    mb: 2,
                    position: "fixed",
                    bottom: 0,
                    textAlign: "center",
                }}
            >
                <AddIcon /> Nova OS
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            Adicionar Ordem de Serviço
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ mb: 2 }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider></Divider>
                    <CustomButton
                        text='Adicionar Técnico'
                        icon={<AddIcon />}
                        styles={{ height: 43, width: 145, borderRadius: 2, backgroundColor: '#2148C0', mt: 2, mb: 2 }} />
                    <FormOS />
                    <Box
                        sx={{
                            position: "fixed",
                            bottom: 15,
                            ml: 125,
                        }}
                    >
                        <CustomButton text='Confirmar' defaultStyle={true} />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}