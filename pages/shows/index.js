import { Grid, Typography } from "@mui/material";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import React from "react";
import EventsItems from "../../components/Events/EventsItems";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";

const index = ({ currentEvents, pastEvents }) => {
    return (
        <PageLayout name="Shows">
            <Grid
                container
                className="section"
                spacing={4}
                sx={{ position: "relative" }}
            >
                <Grid item xs={12} md={3}>
                    <Typography
                        className="sticky"
                        variant="h2"
                        component="body1"
                        sx={{ marginBottom: ".5em" }}
                    >
                        Upcoming:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <EventsItems events={currentEvents} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography
                        className="sticky"
                        variant="h2"
                        component="body1"
                        sx={{ marginBottom: ".5em" }}
                    >
                        Past:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <EventsItems events={pastEvents} />
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const today = new Date().toJSON().slice(0, 10);

    const eventsRef = collection(db, "events");
    const q1 = query(
        eventsRef,
        orderBy("startDate", "asc"),
        where("startDate", ">=", today),
        limit(3)
    );
    const q2 = query(
        eventsRef,
        orderBy("startDate", "asc"),
        where("startDate", "<", today),
        limit(3)
    );

    const currentEventsQuery = await getDocs(q1);
    const pastEventsQuery = await getDocs(q2);
    let currentEvents = [];
    let pastEvents = [];
    currentEventsQuery.docs.forEach((doc, index) => {
        currentEvents = [...currentEvents, doc.data()];
    });
    pastEventsQuery.docs.forEach((doc, index) => {
        pastEvents = [...pastEvents, doc.data()];
    });

    return {
        props: {
            currentEvents,
            pastEvents,
        },
    };
};

export default index;
