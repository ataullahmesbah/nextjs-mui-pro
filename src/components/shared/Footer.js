import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";


const Footer = () => {

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

    return (
        <Box className="bg-gray-800 px-2 py-10">
            <Container>

                {/* icons */}
                <Box
                    className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: 'white',
                            margin: '6px',


                        }
                    }}>

                    <IconButton>
                        <Facebook />
                        <Instagram />
                        <LinkedIn />
                        <Twitter />
                    </IconButton>



                </Box>

                <Box className='w-full text-center'>
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>
                                {item.route}
                            </Button>
                        </Link>
                    ))}

                </Box>

                <Typography color='white' textAlign='center' variant="body2">
                    @2024 The Dragon News. Hyascka
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;