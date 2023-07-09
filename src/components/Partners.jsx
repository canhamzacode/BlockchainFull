import { Box, Stack } from '@mui/material'
import React from 'react'
import AlphaBlocks from "../assets/image/AlphaBlocks.png"

const Partners = () => {
    return (
        <Stack direction={"column"} sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr", xs: "1fr 1fr 1fr" }, gap: "15px", padding: { xs: "20px 10px", md: "40px 35px" } }} className='partner'  >
            <Box sx={{ padding: "10px", background: "#e3e3e5" }}>
                <img src={AlphaBlocks} alt="" />
            </Box>
            <Box sx={{ padding: "10px", background: "#e3e3e5" }}>
                <img src={AlphaBlocks} alt="" />
            </Box>
            <Box sx={{ padding: "10px", background: "#e3e3e5" }}>
                <img src={AlphaBlocks} alt="" />
            </Box>
            <Box sx={{ padding: "10px", background: "#e3e3e5" }}>
                <img src={AlphaBlocks} alt="" />
            </Box>
            <Box sx={{ padding: "10px", background: "#e3e3e5" }}>
                <img src={AlphaBlocks} alt="" />
            </Box>
        </Stack >
    )
}

export default Partners