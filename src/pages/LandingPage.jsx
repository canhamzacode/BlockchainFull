import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import aboutpics from "../assets/image/aboutpics.jpeg"
import Partners from '../components/Partners'
import WhyUs from '../components/WhyUs'
import Misssion from '../components/Misssion'
import Community from '../components/Community'
import Leaders from '../components/Leaders'

const LandingPage = () => {
    return (
        <Box>
            <Box sx={{ height: "75vh", width: "100%", position: "relative", backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)" }}>
                <img src={aboutpics} alt="" className='heroImg' />
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        padding: "10px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)"
                    }}
                >
                    <Stack sx={{ textAlign: "center", gap: "15px", color: "white", padding: { xs: "20px 10px", md: "40px 35px" } }}>
                        <Typography variant='h3' sx={{ fontWeight: "800", flexShrink: "revert", fontSize: { xs: "35px", md: "45px" } }}>
                            BLOCKCHAIN <br /> FUL
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: "20px", fontWeight: "600", padding: { md: "10px 140px " } }}>
                            A student organization developing the next generation of blockchain leaders through hands-on projects and education.
                        </Typography>
                        <Button className='cta'>
                            Get Started
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Partners />
            <WhyUs />
            <Misssion />
            <Community />
            <Leaders />
        </Box>

    )
}

export default LandingPage