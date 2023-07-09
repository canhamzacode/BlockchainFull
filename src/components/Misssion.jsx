import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import mission from "../assets/image/mission.jpg"
// import mission from "../assets/image/"

const Misssion = () => {
    return (
        <Stack
            direction={"row"} sx={{ display: "grid", alignItems: "center", gridTemplateColumns: { md: ".7fr 1fr", xs: "1fr" }, padding: "20px", gap: "30px", background: "#e3e3e5" }}>
            <Box sx={{ width: "100%" }}>
                <img src={mission} alt="" loading='lazy' />
            </Box>
            <Box sx={{ width: "100%", display: "grid", gap: "15px" }}>
                <Box sx={{ width: "100%", background: " linear-gradient(to bottom right, #fff, #3F51B5, #fff)", padding: "15px", borderRadius: "10px", color: "#fff" }}>
                    <hr className='curstonHr2' />
                    <Typography variant='h5' sx={{ margin: "10px 0" }}> OUR Mission</Typography>
                    <Typography variant='p' sx={{ fontSize: "18px", lineHeight: "1.3" }} >
                        To be the best campus Blockchain community in Africa with members contributing positively to the Blockchain ecosystem, growth of Nigeria and Africa at large.
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%", background: " linear-gradient(to bottom right, #1a2958, #3F51B5, #fff)"
                    , padding: "15px", borderRadius: "10px", color: "#fff"
                }}>
                    <hr className='curstonHr2' />
                    <Typography variant='h5' sx={{ margin: "10px 0" }}> OUR VISION</Typography>
                    <Typography variant='p' sx={{ fontSize: "18px", lineHeight: "1.3" }} >
                        To be the best campus Blockchain community in Africa with members contributing positively to the Blockchain ecosystem, growth of Nigeria and Africa at large.
                    </Typography>
                </Box>
            </Box>

        </Stack>
    )
}

export default Misssion