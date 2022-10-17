import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import Link from "next/link";
import { formatHtmlDate } from "../../utility/general";
import { eventsPreviewContent } from "../../siteInfo";
import NativeImage from "../../components/general/NativeImage";
import Image from "next/image";

const EventItem = ({ fields, isPreview }) => {
    const title = fields[0].value;
    const start = fields[1].value;
    const end = fields[2].value;
    const venue = fields[3].value;
    const time = fields[4].value;
    const description = fields[5].value;
    const website = fields[6].value;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    margin: { xs: "0", md: "0 2rem" },
                }}
            >
                <Box>
                    <Typography variant="h4">{title}</Typography>
                    <Typography>{`${formatHtmlDate(start)}${end && " - "}${
                        end && formatHtmlDate(end)
                    }, ${time}`}</Typography>

                    <br />
                    <Typography>{description}</Typography>
                    <br />
                </Box>
                <Typography
                    sx={{
                        fontStyle: "italic",
                        marginBottom: ".5em",
                        fontWeight: "300",
                    }}
                >
                    {venue}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        gap: "1em",
                        textDecoration: "underline",
                    }}
                >
                    <Link href={website}>Venue Website</Link>
                </Box>
            </Box>
            <Box sx={{ opacity: "70%", margin: "1rem 0" }}>
                <Image
                    src={eventsPreviewContent.dividerImage.url}
                    height={100}
                    width={1000}
                    alt="divider"
                />
            </Box>
        </Box>
    );
};

export default EventItem;
