import React from "react";

import Header from "../../components/header/header";
import BlogDetailsComp from "../../components/normal/blogComp/blogDetailsComp"
import Footer from "../../components/footer/footer";

function BlogDetails(){
    return (
        <div>
            <Header title="Blog Details" text="Home / Community / Blog Details"/>
            <BlogDetailsComp />
            <Footer/>
        </div>
    )
}

export default BlogDetails;