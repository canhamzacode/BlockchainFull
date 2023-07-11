import React, { useContext } from 'react'
import { Button, Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import navLogo from "../assets/image/navLogo.png"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import 
import { Link as ScrollLink } from 'react-scroll';

const NavBar = ({ handleOpenNav }) => {
    return (
        <Box sx={{ width: "100%", padding: "10px 20px", background: "#1a2958" }}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center", }}>
                <Box
                    sx={{
                        width: { md: "250px", xs: "200px" },
                        height: "70px",
                        background: "rgba(240, 239, 239, 0.83)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        gap: "20px"
                    }} className="logo">
                    <img src={navLogo} alt="logo" />
                </Box>
                <Box>
                    <Stack direction={"row"} gap={5} alignItems={"center"} sx={{ marginRight: "20px", display: { md: "flex", xs: "none" } }} >
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
                    <Stack direction={"row"} gap={5} alignItems={"center"} sx={{ marginRight: "20px", display: { md: "none", xs: "flex" } }} >
                        <Button className='toggleBtn' onClick={handleOpenNav}>
                            <DensityMediumIcon />
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default NavBar;