import Head from "next/head";
import { useRouter } from "next/router";
import { siteName } from "../../siteInfo";

const Meta = () => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${basePath.toUpperCase()} - ${siteName}`}</title>
                )}
                <meta
                    name="keywords"
                    content="literature, literary, stories, story, poetry, poems, poem, magazine, fiction, non-fiction, journal"
                />
                <meta name="description" content="Literary Magazine"></meta>
            </Head>
        </div>
    );
};

export default Meta;
