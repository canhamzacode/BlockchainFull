import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import kevinImg from "../assets/image/kevinImg.png"

const WhyUs = () => {
    return (
        <Stack
            direction={"row"} sx={{ display: "grid", alignItems: "center", gridTemplateColumns: { md: "1fr 0.7fr", xs: "1fr" }, padding: "20px", gap: "30px" }}>
            <Box sx={{ width: "100%" }}>
                <hr className='curstonHr' />
                <Typography variant='h4' sx={{ margin: "10px 0" }}>Why US?</Typography>
                <Typography variant='h5' sx={{ margin: "10px 0" }}> OVERVIEW</Typography>
                <Typography variant='p' sx={{ fontSize: "18px", lineHeight: "2" }} >
                    <span className='highlight'> BlockchainFUL </span> is a  <span className='highlight'> Tech community </span> established with the aim of <span className='highlight'> educating </span>  members of the University Community with both basic and advanced practical <span className='highlight'> knowledge of cryptocurrency, </span>  Blockchain technology, its development, and its opportunities. Though we are focused on the University of Nigeria, we have a diverse <span className='highlight'> community </span> made up of people from diverse fields, institutions and campuses who are <span className='highlight'> Blockchain Enthusiast </span>
                </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
                <img src={kevinImg} alt="" />
            </Box>
        </Stack>
    )
}

export default WhyUs