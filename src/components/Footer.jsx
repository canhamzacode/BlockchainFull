import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import navLogo from "../assets/image/navLogo.png"
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box sx={{ width: "100%", background: "#000", padding: "30px", display: "grid", gap: "15px" }} >
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, gap: "15px" }}>
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
                <Box sx={{ display: "grid", }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: { xs: "center" } }}>
                        <Link to="">
                            <TwitterIcon />
                        </Link>
                        <Link to="">
                            <FacebookIcon />
                        </Link>
                        <Link to="">
                            <LinkedInIcon />
                        </Link>
                    </Box>
                    <Typography variant='p' sx={{ color: "#fff", textAlign: "center" }}>
                        mail: admin@blockchainunn.org
                    </Typography>
                </Box>
            </Stack>
            <hr />
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant='p' sx={{ color: "#fff", textAlign: "center" }}>
                    Copyright © 2023. BlockchainFUL. All rights reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer