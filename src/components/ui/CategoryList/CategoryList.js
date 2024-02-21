import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {

    const { data: allCategories } = await getAllCategories();
    console.log(allCategories);
    return (
        <Box className='mt-5 px-5 py-2'>
            <Typography variant="h6">Category List</Typography>

            <Divider />
            <Stack rowGap={2} sx={{ mt: 2.5 }}>
                {
                    allCategories.map(category => (
                        <Button variant="outlined" key={category.id}>
                            <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>
                                {category.title}</Link>

                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;