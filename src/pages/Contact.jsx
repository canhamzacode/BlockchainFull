import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Community from '../components/Community';

const Contact = () => {
    return (
        <Box sx={{ width: "100%", background: "#fff", padding: "30px", display: "grid", gap: "15px" }} >
            <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, gap: "15px" }}>
                <Community />
            </Stack>
        </Box>
    )
}

export default Contact