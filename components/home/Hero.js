import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/theme";
import { pages, siteName, heroContent } from "../../siteInfo";
import NativeImage from "../general/NativeImage.js";
import theme from "../../styles/themes/theme";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Hero = () => {
    return (
        <Box
            className="section"
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/images/hero2.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    padding: "20vh 0 20vh 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ color: theme.palette.custom.light }}
                >
                    Musician Template
                </Typography>
                <br />
                <Typography
                    sx={{
                        color: theme.palette.custom.lightMuted,
                        fontStyle: "italic",
                    }}
                >
                    and the
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        color: theme.palette.custom.light,
                        textAlign: "center",
                    }}
                >
                    Band Name
                </Typography>
                <br />
                <SocialMediaIcons />
            </Box>
        </Box>
    );
};

export default Hero;
