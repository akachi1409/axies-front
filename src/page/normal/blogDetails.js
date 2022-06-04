import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import BlogDetailsComp from "../../components/normal/blogComp/blogDetailsComp"
import Footer from "../../components/footer/footer";

function BlogDetails(){
    return (
        <div>
            <NavbarComp/>
            <Header title="Blog Details" text="Home / Community / Blog Details"/>
            <BlogDetailsComp />
            <Footer/>
        </div>
    )
}

export default BlogDetails;