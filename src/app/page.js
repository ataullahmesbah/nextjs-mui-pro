import LatestNews from "@/utils/LatestNews/LatestNews";
import SideBar from "@/utils/SideBar/SideBar";
import { Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <Grid container spacing={2} className="m-5">
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>

      </Grid>
    </>
  );
};

export default HomePage;