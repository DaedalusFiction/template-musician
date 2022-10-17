import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import EventItem from "./EventItem";

const EventsItems = ({ events }) => {
    return (
        <Container maxWidth="lg">
            {events &&
                events.map((event, index) => {
                    return <EventItem key={index} fields={event.fields} />;
                })}
        </Container>
    );
};

export default EventsItems;
