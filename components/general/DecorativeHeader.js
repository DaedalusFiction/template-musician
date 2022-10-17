import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import NativeImage from "../general/NativeImage";

const DecorativeHeader = ({ image, text }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    // marginBottom: "2rem",
                    transform: "scaleY(-1)",
                }}
            >
                <NativeImage image={image} maxSize={350} />
            </Box>
            <Typography
                variant="h2"
                component="h3"
                sx={{ textAlign: "center", marginBottom: ".25em" }}
            >
                {text}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "4rem",
                    // transform: "scaleY(-1)",
                }}
            >
                <NativeImage image={image} maxSize={350} />
            </Box>
        </Box>
    );
};

export default DecorativeHeader;
