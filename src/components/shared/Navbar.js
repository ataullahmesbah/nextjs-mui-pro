'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/h-logo.png'
import { IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';

import Header from './Header.js';


const navItems = [
    {
        route: 'Home',
        pathname: '/',
    },
    {
        route: 'About',
        pathname: '/about',
    },
    {
        route: 'Pages',
        pathname: '/pages',
    },
    {
        route: 'Blogs',
        pathname: '/blogs',
    },
    {
        route: 'Category',
        pathname: '/category',
    },
    {
        route: 'News',
        pathname: '/news',
    },
]


const Navbar = () => {

    return (
        <>
            <Header />
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src={logo} width={50} height={50} alt='logo' />


                        <Box className='w-full text-center'>
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className='text-white'>
                                        {item.route}
                                    </Button>
                                </Link>
                            ))}
                            {/* icons */}
                        </Box>

                        <Box>
                            <Stack direction='row'
                                sx={{
                                    "& svg": {
                                        color: 'white',
                                        margin: '6px',


                                    }
                                }}
                            >
                                <IconButton>
                                    <Facebook />
                                    <Instagram />
                                    <LinkedIn />
                                    <Twitter />
                                </IconButton>
                            </Stack>


                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;