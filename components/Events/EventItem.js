import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";
import theme from "../../styles/themes/theme";
import { ArrowRightAlt } from "@mui/icons-material";
import GalleryImage from "../general/NativeImage";
import Image from "next/image";
import EventImage from "./EventImage";
import { formatDate } from "../../utility/general.js";
import { eventsPreviewContent } from "../../siteInfo";
import { formatHtmlDate } from "../../utility/general.js";

const EventItem = ({ fields, isPreview }) => {
    const title = fields[0].value;
    const start = fields[1].value;
    const end = fields[2].value;
    const venue = fields[3].value;
    const time = fields[4].value;
    const description = fields[5].value;
    const website = fields[6].value;

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                }}
            >
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={7}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <Box>
                                <Typography variant="h2">{title}</Typography>
                                <Typography variant="h4">
                                    {`${formatHtmlDate(start)}`}
                                    {end && ` - ${formatHtmlDate(end)}`}
                                </Typography>
                                {
                                    <Typography variant="h5">{`${venue}${
                                        time && ","
                                    } ${time}`}</Typography>
                                }
                                <br />
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkM,
                                    }}
                                >
                                    {description}
                                </Typography>
                                <br />
                            </Box>
                            <Box sx={{ display: "flex", gap: "1em" }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    href={website}
                                    size="large"
                                    endIcon={<ArrowRightAlt />}
                                >
                                    more details
                                </Button>
                                {isPreview && (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        href="/events"
                                        size="large"
                                        endIcon={<ArrowRightAlt />}
                                    >
                                        all events
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                {!isPreview && (
                    <Box sx={{ opacity: "70%", marginBottom: "1rem" }}>
                        <Image
                            src={eventsPreviewContent.dividerImage.url}
                            height={80}
                            width={1000}
                            alt="divider"
                        />
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default EventItem;
