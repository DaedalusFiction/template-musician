import { Box, Container } from "@mui/system";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import PageLayout from "../../../components/layout/PageLayout";
import NativeImage from "../../../components/general/NativeImage";
import { db } from "../../../firebase";
import { Typography } from "@mui/material";
import PublicationBody from "../../../components/publications/PublicationBody";

const page = ({ articles, story }) => {
    return (
        <Box>
            <Container maxWidth="xl" disableGutters>
                <Box>
                    <NativeImage
                        maxSize={3000}
                        url={story.URLs[0]}
                        alt="Roses"
                        blur={story.URLs[0]}
                    />
                </Box>
            </Container>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Typography variant="caption">
                        Image by {story.fields[4].value}
                    </Typography>
                </Box>
                <Box sx={{ padding: "3rem 0" }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: ".25em",
                            justifyContent: "center",
                        }}
                    >
                        {story.subCategories.map((subCategory, index) => {
                            return (
                                <Typography key={index} variant="caption">
                                    [{subCategory}]
                                </Typography>
                            );
                        })}
                    </Box>
                    <Typography
                        sx={{ textAlign: "center", margin: ".25em 0" }}
                        variant="h1"
                    >
                        {story.fields[0].value}
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>by</Typography>
                    <Typography
                        sx={{ textAlign: "center", margin: ".5em 0" }}
                        variant="h4"
                    >
                        {story.fields[1].value}
                    </Typography>
                    <PublicationBody
                        sidebarCategory="fiction"
                        sidebarItems={articles}
                        story={story}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let story = docSnap.data();

    const publicationsRef = collection(db, "publications");
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article"),
        orderBy("dateUploaded", "desc"),
        limit(3)
    );

    const articlesSnapshot = await getDocs(articlesQuery);

    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            articles,
            story,
        },
    };
};

export default page;
