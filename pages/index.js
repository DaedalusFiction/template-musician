import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";
import Hero from "../components/home/Hero";
import theme from "../styles/themes/theme";
import Showcase from "../components/home/Showcase";
import { blockPhotoContentOne, musicPreviewContent } from "../siteInfo";
import AboutPreview from "../components/home/AboutPreview";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import EventsPreview from "../components/home/EventsPreview";
import BlockPhoto from "../components/general/BlockPhoto";
import MusicPreview from "../components/home/MusicPreview";

export default function Home({ events }) {
    return (
        <Box>
            <Meta />
            <Hero />
            <Container maxWidth="xl" disableGutters>
                <MusicPreview
                    musicPreviewContent={musicPreviewContent}
                    variation={1}
                />
                <EventsPreview events={events} />
                <AboutPreview />
                <BlockPhoto blockPhotoContent={blockPhotoContentOne} />
            </Container>
        </Box>
    );
}

export const getServerSideProps = async (context) => {
    const today = new Date().toJSON().slice(0, 10);

    const eventsRef = collection(db, "events");
    const q1 = query(
        eventsRef,
        orderBy("startDate", "asc"),
        where("startDate", ">=", today),
        limit(3)
    );

    const queriedDocuments = await getDocs(q1);
    let events = [];
    queriedDocuments.docs.forEach((doc, index) => {
        events = [...events, doc.data()];
    });

    return {
        props: {
            events,
        },
    };
};
