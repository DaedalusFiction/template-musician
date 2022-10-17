import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Header from "./Header";
import NativeImage from "../../components/general/NativeImage";
import { eventsPreviewContent } from "../../siteInfo";
const PageLayout = ({ name, children }) => {
    return (
        <>
            {/* <Header /> */}
            <Box sx={{ padding: "8rem 0" }}>
                <Meta siteName={name} />
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            // marginBottom: "2rem",
                            transform: "scaleY(-1)",
                        }}
                    >
                        <NativeImage
                            image={eventsPreviewContent.bigDividerImage}
                            maxSize={350}
                        />
                    </Box>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{ textAlign: "center", marginBottom: ".2em" }}
                    >
                        {name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            // marginBottom: "4rem",
                            // transform: "scaleY(-1)",
                        }}
                    >
                        <NativeImage
                            image={eventsPreviewContent.bigDividerImage}
                            maxSize={350}
                        />
                    </Box>
                    {children}
                </Container>
            </Box>
        </>
    );
};

export default PageLayout;
