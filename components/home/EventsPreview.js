import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import theme from "../../styles/themes/theme";
import Event from "../Events/Event";
import EventItem from "../Events/EventItem";
import NativeImage from "../../components/general/NativeImage";
import { eventsPreviewContent } from "../../siteInfo";

const EventsPreview = ({ events }) => {
    return (
        <Box
            className="section"
            sx={{ background: theme.palette.background.accent }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            margin: "1rem",
                        }}
                    >
                        <NativeImage
                            image={eventsPreviewContent.image}
                            maxSize={800}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" sx={{ marginBottom: "1em" }}>
                        {eventsPreviewContent.title}
                    </Typography>
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
        </Box>
    );
};

export default EventsPreview;
