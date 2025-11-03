import React from "react";
import Layout from "../layouts/layout";
import SearchBar from "../components/Header/SearchBar";

function Home() {
    return (
        <Layout>
            <div className="logo_container">
                <img src="./icons/logo.svg" alt="acnempathize_logo" />
            </div>
            <SearchBar />
        </Layout>
    )
}


export default Home;