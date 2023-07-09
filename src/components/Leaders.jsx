import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import kevinImg from "../assets/image/kevinImg.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Leaders = () => {
    return (
        <Stack
            direction={"row"} sx={{ display: "grid", alignItems: "center", padding: "20px", gap: "30px" }}>
            <Box>
                <hr className='curstonHr' />
                <Typography variant='h4' sx={{ margin: "10px 0" }}>Leadership And Team</Typography>
            </Box>
            <Box sx={{ width: "100%", display: "grid", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "20px" }}>
                <Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "15px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)", borderRadius: "8px", color: "#fff" }} className='profileCard'>
                    <Box sx={{ width: "100%", height: "250px", padding: "10px" }}>
                        <img src={kevinImg} alt="" className='' />
                    </Box>
                    <Box sx={{ display: "grid", gap: "10px", padding: "10px" }}>
                        <Typography variant='h6' sx={{ fontWeight: "600" }} >
                            Nduka Annaelechukwu Anthony
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: "16px" }} >
                            Lead and Co-founder, BlockchainUNN;
                            Founder, AlphaBlocks
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "", gap: "10px" }}>
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
                    </Box>
                </Stack>
                <Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "15px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)", borderRadius: "8px", color: "#fff" }} className='profileCard'>
                    <Box sx={{ width: "100%", height: "250px", padding: "10px" }}>
                        <img src={kevinImg} alt="" className='' />
                    </Box>
                    <Box sx={{ display: "grid", gap: "10px", padding: "10px" }}>
                        <Typography variant='h6' sx={{ fontWeight: "600" }} >
                            Nduka Annaelechukwu Anthony
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: "16px" }} >
                            Lead and Co-founder, BlockchainUNN;
                            Founder, AlphaBlocks
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "", gap: "10px" }}>
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
                    </Box>
                </Stack>
                <Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "15px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)", borderRadius: "8px", color: "#fff" }} className='profileCard'>
                    <Box sx={{ width: "100%", height: "250px", padding: "10px" }}>
                        <img src={kevinImg} alt="" className='' />
                    </Box>
                    <Box sx={{ display: "grid", gap: "10px", padding: "10px" }}>
                        <Typography variant='h6' sx={{ fontWeight: "600" }} >
                            Nduka Annaelechukwu Anthony
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: "16px" }} >
                            Lead and Co-founder, BlockchainUNN;
                            Founder, AlphaBlocks
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "", gap: "10px" }}>
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
                    </Box>
                </Stack>
                <Stack sx={{ display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "15px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 61.98%, rgba(75, 75, 75, 0.7) 78.12%)", borderRadius: "8px", color: "#fff" }} className='profileCard'>
                    <Box sx={{ width: "100%", height: "250px", padding: "10px" }}>
                        <img src={kevinImg} alt="" className='' />
                    </Box>
                    <Box sx={{ display: "grid", gap: "10px", padding: "10px" }}>
                        <Typography variant='h6' sx={{ fontWeight: "600" }} >
                            Nduka Annaelechukwu Anthony
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: "16px" }} >
                            Lead and Co-founder, BlockchainUNN;
                            Founder, AlphaBlocks
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "", gap: "10px" }}>
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
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Leaders