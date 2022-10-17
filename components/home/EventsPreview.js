import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import theme from "../../styles/themes/theme";
import Event from "../Events/Event";
import EventItem from "../Events/EventItem";
import NativeImage from "../../components/general/NativeImage";
import { eventsPreviewContent } from "../../siteInfo";
import DecorativeHeader from "../general/DecorativeHeader";

const EventsPreview = ({ events }) => {
    return (
        <Box
            className="section"
            sx={{ background: theme.palette.background.accent }}
        >
            <Container maxWidth="lg">
                <DecorativeHeader
                    text="UPCOMING EVENTS"
                    image={eventsPreviewContent.bigDividerImage}
                />
                <Grid container spacing={6} sx={{ position: "relative" }}>
                    <Grid item xs={12} md={5}>
                        <Box className="sticky">
                            <NativeImage
                                image={eventsPreviewContent.image}
                                maxSize={800}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        {events.map((event, index) => {
                            return (
                                <Event
                                    key={index}
                                    fields={event.fields}
                                    isPreview
                                />
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsPreview;
