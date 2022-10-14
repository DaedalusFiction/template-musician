import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import StoryPreview from "../../../components/home/StoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";

const index = ({ poems }) => {
    return (
        <PageLayout name="Poetry">
            <Grid className="section" container spacing={3}>
                {poems.map((poem, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <StoryPreview story={poem} />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getStaticProps = async () => {
    const publicationsRef = collection(db, "publications");
    const poetryQuery = query(
        publicationsRef,
        where("categories", "array-contains", "poetry"),
        orderBy("dateUploaded", "desc")
    );

    const poetrySnapshot = await getDocs(poetryQuery);
    let poems = [];
    poetrySnapshot.docs.forEach((doc, index) => {
        poems = [...poems, doc.data()];
    });

    return {
        props: {
            poems,
        },
    };
};

export default index;
