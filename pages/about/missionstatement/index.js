import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import {
    leadProfile,
    secondaryProfiles,
    studioContent,
} from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={studioContent.imageOne}
                        />
                        <Typography variant="caption">
                            {studioContent.imageOne.alt}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {studioContent.header}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {studioContent.content}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
