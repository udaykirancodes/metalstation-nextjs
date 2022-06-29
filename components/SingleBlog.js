import React from 'react'
import Link from "next/link"
export default function SingleBlog() {
  return (
    <>
        <Link href="/blogs/Title of the Blog">
        <div className="singleBlog">
                <div className="blogTop">
                        <img src="/metal.png" alt="Blog_Image" className="blogImage" />
                </div>
                <div className="blogBottom">
                        <div className="info">
                                <p className="blog_small">
                                        <i className="icon fa-thin fa-timer">#</i>
                                        20 June 2022 
                                </p>
                                <p className="blog_small">
                                        <i className="icon fa-thin fa-timer">#</i>
                                        Vehicle  
                                </p>
                        </div>
                        <div className="details">
                                <h5 className="blog_title">Title of the Blog 01</h5>
                                <p className="blog_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                        </div>
                </div>
        </div>
        </Link>
    </>
  )
}
