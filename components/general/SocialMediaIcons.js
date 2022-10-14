import { IconButton, Stack, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import theme from "../../styles/themes/theme";
const SocialMediaIcons = ({ fontSize, color }) => {
    return (
        <Stack direction="row" spacing={1}>
            <Link href="https://instagram.com">
                <Tooltip title="instagram">
                    <IconButton aria-label="instagram">
                        <InstagramIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://facebook.com">
                <Tooltip title="facebook">
                    <IconButton aria-label="facebook">
                        <FacebookIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://twitter.com">
                <Tooltip title="twitter">
                    <IconButton aria-label="twitter">
                        <TwitterIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
        </Stack>
    );
};

export default SocialMediaIcons;
