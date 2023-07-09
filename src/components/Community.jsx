import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import AlphaBlocks from "../assets/image/AlphaBlocks.png"
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
const Community = () => {
    return (
        <Box sx={{ width: "100%", margin: "15px 0" }}>
            <Typography variant='h4' sx={{ margin: "10px 0", textAlign: "center" }}>Community</Typography>
            <Stack direction={"column"} sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gap: "15px", padding: { xs: "20px 10px", md: "40px 35px" } }} className='community'  >
                <Box sx={{ padding: "30px 25px", background: "#e3e3e5", display: "grid", gap: "10px", borderRadius: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <Typography variant='p' sx={{ fontSize: "20px", lineHeight: "1.3" }} >
                            TELEGRAM COMMUNITY
                        </Typography>
                        <TelegramIcon />
                    </Box>
                    <Link to="" className='w-full'>
                        <Button className='cta cta2'>
                            A Click To Building Your Future
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ padding: "30px 25px", background: "#e3e3e5", display: "grid", gap: "10px", borderRadius: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <Typography variant='p' sx={{ fontSize: "20px", lineHeight: "1.3" }} >
                            BLOCKCHAINFUL DEVELOPERS
                        </Typography>
                        <TelegramIcon />
                    </Box>
                    <Link to="" className='w-full'>
                        <Button className='cta cta2'>
                            A Click To Building Your Future
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ padding: "30px 25px", background: "#e3e3e5", display: "grid", gap: "10px", borderRadius: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
                        <Typography variant='p' sx={{ fontSize: "20px", lineHeight: "1.3" }} >
                            BLOCKCHAINUNN DESIGNERS
                        </Typography>
                        <TelegramIcon />
                    </Box>
                    <Link to="" className='w-full'>
                        <Button className='cta cta2'>
                            A Click To Building Your Future
                        </Button>
                    </Link>
                </Box>
            </Stack >
        </Box>
    )
}

export default Community