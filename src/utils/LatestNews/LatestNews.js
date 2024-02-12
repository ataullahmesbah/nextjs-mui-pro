import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from '@/assets/top-news.jpg';
import topNews2 from '@/assets/top-news2.jpg';
import topNews3 from '@/assets/top-news3.jpg';
import Image from "next/image";


const LatestNews = () => {
    return (

        <div>
            <Box>
                <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={topNews} width={800} alt="top news" placeholder="blur" />
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
                                className="">Technology</p>

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



                <Grid style={{
                    marginTop: '10px'
                }} className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} height={700} alt="top news" placeholder="blur" />
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
                                        className="">Technology</p>

                                    <Typography  >
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews3} width={800} height={700} alt="top news" placeholder="blur" />
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
                                        className="">Technology</p>

                                    <Typography  >
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} width={800} alt="top news" placeholder="blur" />
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
                                        className="">Technology</p>

                                    <Typography  >
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
                    </Grid>
                    <Grid item xs={6}>
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
                                        className="">Technology</p>

                                    <Typography  >
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
                    </Grid>

                </Grid>

            </Box>
        </div>


    );
};

export default LatestNews;