// TODO: Comment this file

import {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/portfolio.module.css";
import {useEffect, useState} from "react";
import Router from "next/router";

const Portfolio: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/portfolio" && process.env.NODE_ENV == "production"){
            Router.push("/construction");
        }else{
            setLoaded(true);
        }
    },[]);

    if(!loaded){
        return <div />;
    }
    return(
        <>
            <Head>
                <title>My Portfolio - Matthew Savin</title>
                <meta name="description" content="Matthew Savin's Portfolio of Exemplar Work" />
            </Head>
            <main className={styles.main}>
                <h1>My Activities</h1>
            </main>
        </>
    );
};

export default Portfolio;