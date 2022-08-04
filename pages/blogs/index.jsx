/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState ,  useEffect} from 'react'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import Pagination from '../../components/Pagination'
import SingleBlog from '../../components/SingleBlog'
import Link from "next/link"
import  Context  from '../../context/Context'
import axios from 'axios'


import {AllBlgos , BlogCategories} from '../../urls'; 
import { useRouter } from 'next/router'

const postsPerPage = 3 ; 

export default function Blogs() {



        const [Data , setData] = useState({
                results : [] // just not to get error 

        }); 


        
        const router = useRouter(); 
        
        const getBlogs = async ()=>{
                const {data} = await axios.get(AllBlgos+`?page=${1}&limit=${postsPerPage}`);
                if(data.success){
                        setData(data.data); 
                        console.log(data)
                }
        }
        const getCategories = async ()=>{
                // blogs 
                getBlogs()
                // categories 
                const {data} = await axios.get(BlogCategories);
                if(data.success){
                        setCategories(data.data); 
                }
        }
        useEffect(() => {
                document.title="Metal Station - Blogs"

                
                getCategories()
        }, [])
        
        
        // functions to change the state 
        const [currentPage , setcurrentPage] = useState(1); 

        // categories 
        const [categories , setCategories] = useState([]); 

        const [active , setActive] = useState(''); 

        const getdata = async()=>{
                console.log(currentPage); 
                const {data} = await axios.get(AllBlgos+`?page=${currentPage}&limit=${postsPerPage}&category=${active}`);
                if(data.success){
                        setData(data.data); 
                        console.log(data.data.results); 
                }
        }
        useEffect(() => {
                getdata(); 
        }, [currentPage,active])
        useEffect(()=>{
                setcurrentPage(1); 
        },[active])
        return (
        <>
        <section className="container" style={{marginTop:'4rem'}}>
                        <div className="breadCrumbs">
                                <p className="breadCrumbsText">
                                        <Link href="/"> 
                                                <span>
                                                        <span >Home</span>
                                                        <i className="uil uil-angle-right"></i>
                                                </span>
                                        </Link>
                                        <b className="activeText">
                                                Blogs and Articles
                                        </b>
                                </p>
                        </div>
                        <div className="pageTitleContainer">
                                <h2 className="pageTitle">Blogs and Articles</h2>
                        </div> 
                        <div className="categories">
                                {
                                        <span onClick={()=>setActive('')} className={active==='' ? 'category active':'category'}>All</span> 
                                }
                                {
                                        categories && 
                                        categories.map((element,index)=>{
                                                return <span key={index} onClick={()=>{setActive(element)}} className={active===`${element}`?'category active':'category'}>{element}</span>
                                        })
                                }
                        </div>

                        <div className="blogs_container">
                                {
                                        Data && 
                                        
                                        Data.results.map((blog)=>{
                                                return <SingleBlog key={blog._id} blog={blog} />
                                        })
                                        
                                }
                        </div>

                        

                <Pagination current={currentPage} setcurrentPage={setcurrentPage} pages={Data.pages} previous={Data.previous} next={Data.next} />
                </section>
        </>
  )
}
