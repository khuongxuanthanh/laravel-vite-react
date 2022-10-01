import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

import Navtop from "@/Components/Navbar/Navtop";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
// import Products from "@/Components/Products/Products";
import IndexProduct from "@/Components/Products/Index";

export default function Welcome() {
    return (
        <>
            <Head title="Hekto" />
            <Navtop />
            <Navbar />
            {/* <Products /> */}
            <IndexProduct />
            <Footer />
        </>
    );
}