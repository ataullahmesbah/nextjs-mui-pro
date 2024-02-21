import CategoryList from "@/components/ui/CategoryList/CategoryList";
import LatestNews from "@/utils/LatestNews/LatestNews";
import { Box, Container, Grid } from "@mui/material";


const CategoriesLayout = ({ children }) => {
    return (
        <Box>
            <Container>
                <Grid container spacing={2} className="m-5">
                    <Grid item xs={3}>
                        <CategoryList />
                    </Grid>
                    <Grid item xs={9}>
                        {children}
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;