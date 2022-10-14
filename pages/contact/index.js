import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">Get in Touch</Typography>
                        <br />
                        <Typography>
                            Have a comment or suggestion? Feel a strong urge to
                            tell us how much you like or hate one of our
                            stories? Just want to shoot the shit? Send us a
                            comment!
                        </Typography>
                        <br />
                        <Typography>
                            Or email us at daedalusfiction@gmail.com.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm config={contactConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
