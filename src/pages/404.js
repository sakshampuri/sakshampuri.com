import * as React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
    const [catUrl, changeCatUrl] = React.useState("");

    React.useLayoutEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => res.json())
            .then((res) => {
                if (res && res[0]) changeCatUrl(res[0].url);
            });
    }, []);

    return (
        <Layout>
            <h1>NOT FOUND</h1>
            <p>
                You just hit a route that doesn&#39;t exist.... Wanna head back{" "}
                <a href='https://sakshampuri.com'>Home</a> ?
            </p>
            <hr></hr>

            <h2>Don't be sad, it's CATURDAY!</h2>
            <p>
                Here is a <strong>truly</strong> random cat for you :)
            </p>
            {catUrl && <img src={catUrl}></img>}
        </Layout>
    );
};

export default NotFoundPage;
