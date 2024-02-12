import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topNews3 from '@/assets/top-news3.jpg';

const SideBar = () => {
    return (
        <Box>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews3} width={800} alt="top news" placeholder="blur" />
                    </CardMedia>

                    <CardContent>
                        <p style={{
                            backgroundColor: 'red',
                            width: '100px',
                            padding: '2px',
                            borderRadius: '6px',
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'normal',
                            marginBottom: '15px'

                        }}
                            className="">Tech</p>

                        <Typography gutterBottom variant="h5" component="div" >
                            Bitcoin climbs above $45,000 for first time since April 2024
                        </Typography>
                        <Typography gutterBottom >
                            By Ataullah Mesbah - February 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt sunt expedita, sequi dolore vitae nobis necessitatibus nisi rem consequuntur?
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;