import { Grid, Typography } from "@mui/material";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { galleryCategories, galleryStylesCategories } from "../../siteInfo";
import GalleryCategoryPreview from "../../components/gallery/GalleryCategoryPreview";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Gallery from "../../components/gallery/Gallery";
import { db } from "../../firebase";

const Projects = ({ images }) => {
    return (
        <PageLayout name="GALLERY">
            <Gallery images={images} category="gallery" />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const imagesRef = collection(db, "gallery");
    const q1 = query(imagesRef, orderBy("dateUploaded", "desc"));

    const queriedDocuments = await getDocs(q1);
    let images = [];
    queriedDocuments.docs.forEach((doc, index) => {
        images = [...images, doc.data()];
    });

    return {
        props: {
            images,
        },
    };
};

export default Projects;
