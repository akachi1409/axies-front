import React from "react";

import NavbarComp from "../../components/navbar/navbarcomp"
import Header from "../../components/header/header";
import BlogComp from "../../components/normal/blogComp/blogComp"
import Footer from "../../components/footer/footer";

function Blog() {
    return(
        <div>
            <NavbarComp/>
            <Header title="Blog" text = "Home / Community / Blog"/>
            <BlogComp/>
            <Footer/>
        </div>
    )
}

export default Blog;