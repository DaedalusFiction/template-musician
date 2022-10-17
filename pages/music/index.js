import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { eventsPreviewContent, musicContent } from "../../siteInfo";
import ReactAudioPlayer from "react-audio-player";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";

const index = () => {
    return (
        <PageLayout name="Music">
            <Container maxWidth="md" className="section">
                {musicContent.songs.map((song, index) => {
                    return (
                        <Box key={index}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            textAlign: {
                                                xs: "center",
                                                md: "start",
                                            },
                                        }}
                                    >
                                        {song.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "center",
                                                md: "end",
                                            },
                                            height: "100%",
                                            alignItems: "center",
                                        }}
                                    >
                                        <ReactAudioPlayer
                                            key={index}
                                            src={song.url}
                                            controls
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    opacity: "70%",
                                    margin: "2rem auto",
                                    width: "90%",
                                }}
                            >
                                <Image
                                    src={eventsPreviewContent.dividerImage.url}
                                    height={80}
                                    width={1000}
                                    alt="divider"
                                />
                            </Box>
                        </Box>
                    );
                })}
            </Container>
        </PageLayout>
    );
};

export default index;
