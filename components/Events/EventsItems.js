import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventItem from "./EventItem";

const EventsItems = () => {
    const [events] = useGetEvents("events");
    const handle = () => {
        console.log(events[0].data());
    };
    return (
        <Container className="section" maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography
                        variant="h3"
                        onClick={handle}
                        sx={{ marginBottom: ".5em" }}
                    >
                        Upcoming:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    {events &&
                        events.map((event, index) => {
                            return (
                                <EventItem
                                    key={index}
                                    fields={event.data().fields}
                                />
                            );
                        })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default EventsItems;
