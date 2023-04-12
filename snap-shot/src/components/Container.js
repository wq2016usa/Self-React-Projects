import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../photoContext/photoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
    //using useContext can pass the parameters to photoContext and fetch the data from photoContext directly.
    const { images, loading, runSearch, setLoading } = useContext(PhotoContext);

    useEffect(() => {
        //searchTerm is the query passed to url
        runSearch(searchTerm);
        setTimeout(()=>{
            setLoading(false);
        },1000);
    }, [searchTerm]);

    return (
    <div className="photo-container">
        {loading ? <Loader /> : <Gallery data={images} />}
    </div>
    );
};

export default Container;