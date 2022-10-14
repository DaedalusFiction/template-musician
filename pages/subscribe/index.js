import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SubscribeForm from "../../components/subscribe/SubscribeForm";
import PageLayout from "../../components/layout/PageLayout";
import { subscribeConfig } from "../../siteInfo";

const index = () => {
    const text =
        "We promise not to do anything funny with your email address. Can you trust us? That's for you to decide. We trust us, but that shouldn't influence your decision";

    return (
        <PageLayout name="SUBSCRIBE">
            <Container maxWidth="sm" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Get on our mailing list
                        </Typography>
                        <br />
                        <Typography>{text}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SubscribeForm config={subscribeConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
