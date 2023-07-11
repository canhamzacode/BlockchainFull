import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "grid",
};
const MyModal = ({ open, handleClose }) => {

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} className="gap-2">
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {/* Add Story */}
                    </Typography>
                    <Button onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </Box>

                <Box sx={{ width: "100%" }}>
                    <Stack gap={3} alignItems={"center"} sx={{ marginRight: "20px", display: "flex", color: "black" }} className='myModalLink' >
                        <Link to={"/"}>
                            <Typography variant='p' sx={{ fontWeight: "500", fontSize: "15px" }} >
                                HOME
                            </Typography>
                        </Link>
                        <ScrollLink to="whyus" smooth={true} duration={500}>
                            <Typography variant='p' sx={{ fontWeight: "500", fontSize: "15px" }}>
                                ABOUT
                            </Typography>
                        </ScrollLink>
                        <ScrollLink to="community" smooth={true} duration={500}>
                            <Typography variant='p' sx={{ fontWeight: "500", fontSize: "15px" }}>
                                COMMUNITY
                            </Typography>
                        </ScrollLink>
                        <ScrollLink to="leaders" smooth={true} duration={500}>
                            <Typography variant='p' sx={{ fontWeight: "500", fontSize: "15px" }}>
                                TEAM
                            </Typography>
                        </ScrollLink>
                        <Link to={"/contact"}>
                            <Typography variant='p' sx={{ fontWeight: "500", fontSize: "15px" }} >
                                CONTACT
                            </Typography>
                        </Link>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
}

export default MyModal