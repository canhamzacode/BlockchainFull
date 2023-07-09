import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './src/components/NavBar'
import Footer from './src/components/Footer'
import { Box } from '@mui/material'
import MyModal from './src/components/MyModal'

const Layout = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleOpenNav = () => setOpenNav(true);
    const handleCloseNav = () => setOpenNav(false);


    return (
        <Box className="p-4" sx={{
        }} >
            <NavBar handleOpenNav={handleOpenNav} />
            <Outlet />
            <MyModal handleClose={handleCloseNav} handleOpen={handleOpenNav} open={openNav} />
            <Footer />
            {/* <NavModal handleCloseNav={handleCloseNav} handleOpenNav={handleOpenNav} openNav={openNav} /> */}
        </Box>
    )
}

export default Layout