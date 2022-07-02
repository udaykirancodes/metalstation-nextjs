import React, { useContext } from 'react'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import Pagination from '../../components/Pagination'
import SingleBlog from '../../components/SingleBlog'
import Link from "next/link"
import  Context  from '../../context/Context'
export default function Blogs() {
        const context = useContext(Context);
  return (
    <>
        
        {/* <Navbar /> */}

      <section className="container">
                <div className="breadCrumbs">
                        <p className="breadCrumbsText">Home &gt; 
                                <b className="activeText">
                                Blogs and Articles
                                </b>
                        </p>
                </div>
                <div className="pageTitleContainer">
                        <h2 className="pageTitle">Blogs and Articles</h2>
                </div> 
                <div className="categories">
                        <span className="category active">All</span>
                        <span className="category">Aluminium</span>
                        <span className="category">Copper</span>
                        <span className="category">Steel</span>
                        <span className="category">Vehicle</span>
                </div>

                <div className="blogs_container">
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                </div>

                

        <Pagination />
        </section>
    </>
  )
}
