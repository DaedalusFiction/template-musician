import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import NativeImage from "../../components/general/NativeImage";
import { aboutContent } from "../../siteInfo";

const AboutPreview = () => {
    return (
        <Grid className="section" container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        gap: "1rem",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="h3">About Us</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, fugiat ipsam. A pariatur accusamus
                        exercitationem error explicabo delectus, nesciunt fugit.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, fugiat ipsam. A pariatur accusamus
                        exercitationem error explicabo delectus, nesciunt fugit.
                    </Typography>
                    <Box
                        sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                    >
                        {aboutContent.buttons.map((button, index) => {
                            return (
                                <Link key={index} href={button.href}>
                                    <Button size="large" variant="contained">
                                        {button.text}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <NativeImage image={aboutContent.image} maxSize={2000} />
            </Grid>
        </Grid>
    );
};

export default AboutPreview;
