/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pagination from '../../components/Pagination';
import SingleBlog from '../../components/SingleBlog';
import Feedback from '../../components/Feedback';
import { backendurl, SingleBlogUrl, AllBlgos } from '../../urls';
import axios from 'axios';
import Link from 'next/link';

export default function Blogs() {
        const router = useRouter();
        const { name } = router.query;
        const [blog, setblog] = useState({});

        const [loading, setloading] = useState(true)

        useEffect(() => {
                document.title = "Metal Station - Blogs"
                const getdata = async () => {
                        let { data } = await axios.get(SingleBlogUrl + `/${name}`);
                        // let data = await res.json(); 
                        console.log(data);
                        if (data.success) {
                                setblog(data.data);
                                setloading(false);
                                document.title = blog.title
                        }
                        else {
                                router.push('/blogs');
                        }
                }
                getdata();

        }, [name])


        // get some related blogs with current blog
        const [array, setarray] = useState([]);
        useEffect(() => {
                const getdata = async () => {
                        if (!loading) {
                                const { data } = await axios.get(AllBlgos + `?page=${1}&limit=${3}&category=${blog.category[0]}`);
                                if (data.success) {
                                        setarray(data.data.results);
                                        console.log(data.data.results);
                                }
                        }
                }
                getdata();
        }, [blog]);

        let date = new Date(blog.createdAt);
        let displaydate = date.getDay().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getFullYear();

        if (loading) {
                return <>

                </>
        }
        return (
                <>
                        <section className="container" style={{ marginTop: '4rem' }}>
                                <div className="breadCrumbs">
                                        <p className="breadCrumbsText">
                                                <Link href="/">
                                                        <span> Home <i className="uil uil-angle-right"></i></span>
                                                </Link>
                                                <Link href="/blogs" style={{ cursor: 'pointer' }}>
                                                        <span> Blogs and Articles  <i className="uil uil-angle-right"></i> </span>
                                                </Link>
                                                <b className="activeText">
                                                        {blog.title}
                                                </b>
                                        </p>
                                </div>
                                <div className="pageTitleContainer">
                                        <h2 className="pageTitle">{blog.title}</h2>
                                </div>
                                <div className="blogpageinfo">
                                        <p className="blog_small">
                                                <i className="icon uil uil-clock"></i>
                                                {displaydate}
                                        </p>
                                        <p className="blog_small">
                                                <i className="icon uil uil-pricetag-alt"></i>
                                                {blog.category[0]}
                                        </p>
                                </div>

                                <div className="singleBlogImageContainer container">
                                        <Image src={backendurl + blog.img || '/metal.png'} height="630px" alt='Image' width="1280px"></Image>
                                </div>

                                {/* <div className="blogDescription">
                        <p className="small_text">{blog.description}</p>
                        </div> */}

                                <div className="specialEffect">
                                        <h4 className="specialText">{blog.title}</h4>
                                </div>
                                <div className="blogDescription">
                                        <p className="small_text">
                                                {blog.description}
                                        </p>
                                </div>

                                <div className="sharing">
                                        <div className="tags">
                                                <p className="shareText">Share : </p>
                                                <i className="uil uil-instagram"></i>
                                                <i className="uil uil-facebook"></i>
                                                <i className="uil uil-whatsapp"></i>
                                        </div>
                                        <div className="tags">
                                                <p className="shareText">Tags : </p>
                                                {
                                                        blog.category.map((tag, index) => {
                                                                return <p key={index} className="tag">{tag}</p>
                                                        })

                                                }
                                        </div>
                                </div>

                                {
                                        array.length > 1 ?
                                                <>
                                                        <div className="pageTitleContainer">
                                                                <h2 className="pageTitle">Related Blogs and Articles</h2>
                                                        </div>

                                                        <div className="blogs_container">
                                                                {

                                                                        array.map((b, index) => {
                                                                                if (blog._id !== b._id) {
                                                                                        return <SingleBlog key={index} blog={b} />
                                                                                }
                                                                        })

                                                                }
                                                        </div>
                                                </>
                                                : null
                                }




                                <Feedback />


                        </section>
                </>
        )
}
