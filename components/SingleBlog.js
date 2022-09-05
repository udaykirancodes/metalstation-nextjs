import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { backendurl } from '../urls'
import { useRouter } from 'next/router';
export default function SingleBlog({ blog }) {
        let date = new Date(blog.createdAt);
        let displaydate = date.getDay().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getFullYear();

        let link = '/blogs/' + blog._id;

        const router = useRouter();

        return (
                <>
                        <div className="singleBlog" onClick={() => router.push(link)}>
                                <div className="blogTop">
                                        <Image src={backendurl + blog.img} priority alt="Blog_Image" layout="fill" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="info">
                                                <p className="blog_small">
                                                        <i className="icon uil-clock uil"></i>
                                                        {
                                                                displaydate
                                                        }
                                                </p>
                                                <p className="blog_small">
                                                        <i className="icon  uil-pricetag-alt uil"></i>
                                                        {blog.category[0]}
                                                </p>
                                        </div>
                                        <div className="details">
                                                <h5 className="blog_title">{blog.title}</h5>
                                                <p className="blog_desc">{blog.description.slice(0, 90) + "..."}</p>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
