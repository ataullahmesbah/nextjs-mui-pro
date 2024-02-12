import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className='my-4'>
            <Container className="space-y-2">
                <h1 className="text-4xl text-center">The Dragon News</h1>

                <Typography color='block' textAlign='center' fontWeight='4xl' fontStyle='' variant="body2">
                    Journal News Updated
                </Typography>

                <Typography color='block' textAlign='center' >
                    {currentDate}
                </Typography>
            </Container>

        </Box>
    );
};

export default Header;