import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";
import Hero from "../components/home/Hero";
import theme from "../styles/themes/theme";
import Showcase from "../components/home/Showcase";
import { showcaseContentOne } from "../siteInfo";
import AboutPreview from "../components/home/AboutPreview";

export default function Home() {
    return (
        <Box>
            <Meta />
            <Hero />
            <Container maxWidth="lg">
                <AboutPreview />
                <Showcase showcaseContent={showcaseContentOne} />
            </Container>
        </Box>
    );
}
