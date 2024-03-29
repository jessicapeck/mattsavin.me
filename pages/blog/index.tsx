// TODO: Comment this file

import {NextPage} from "next";
import {useEffect, useState} from "react";
import Router from "next/router";

const Blog: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/blog" && process.env.NODE_ENV == "production"){
            Router.push("/construction");
        }else{
            setLoaded(true);
        }
    },[]);

    if(!loaded){
        return <div />;
    }

    return (
        <></>
    );
};

export default Blog;