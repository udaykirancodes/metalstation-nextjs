import React from 'react'
import Navbar from "../../components/Navbar"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pagination from '../../components/Pagination';
import SingleBlog from '../../components/SingleBlog';
import Feedback from '../../components/Feedback';
export default function Blogs() {
  const router = useRouter(); 
  const {name} = router.query; 
  return (
    <>
      <section className="container">
                <div className="breadCrumbs">
                        <p className="breadCrumbsText">Home &gt;  Blogs and Articles  &gt; 
                                <b className="activeText">
                                 Heading Of the Selected Blog 
                                </b>
                        </p>
                </div>
                <div className="pageTitleContainer">
                        <h2 className="pageTitle">Blogs and Articles</h2>
                </div> 
                <div className="blogpageinfo">
                        <p className="blog_small">
                                <i className="icon fa-thin fa-timer">#</i>
                                20 June 2022 
                        </p>
                        <p className="blog_small">
                                <i className="icon fa-thin fa-timer">#</i>
                                Vehicle  
                        </p>
                </div>

                <div className="singleBlogImageContainer container">
                    <Image src="/metal.png" height="630px" width="1280px"></Image>
                </div>

                <div className="blogDescription">
                  <p className="small_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque, quia aperiam nam architecto corporis ad, at placeat facere sint sequi! Saepe repudiandae consectetur amet nihil quibusdam incidunt, aperiam expedita veritatis non harum quisquam at porro praesentium, debitis totam assumenda quaerat ea. Aliquid obcaecati natus distinctio nobis cum eius molestiae magni consequatur beatae eum ipsa, facilis aliquam rem? Provident, doloribus. Quos, aut ex beatae consequatur voluptatem expedita, officia autem dolores, facere eum voluptate laudantium cumque! Facilis cum sed, numquam saepe modi asperiores obcaecati. Tempora ducimus suscipit, nam reiciendis libero perferendis voluptas atque, fuga maxime doloremque iste quisquam explicabo, tenetur totam tempore at aperiam iusto amet praesentium nemo harum! Quidem ipsum rerum quae quaerat nulla perferendis eveniet facere, amet consequuntur eum sed dicta. Ipsum qui sed, sunt magni, facilis dolor vitae voluptatum accusamus nam sapiente quisquam consectetur eveniet exercitationem id? Temporibus minus, ipsum iusto labore officia molestiae porro. Omnis sequi soluta tempore dolor tenetur at? Atque incidunt minus omnis delectus laudantium eaque amet magni voluptatum? Quis aliquid illum autem veniam eaque velit nostrum. Esse inventore unde dolorum dolore error distinctio eum quidem rem! In cumque asperiores voluptatum minus? Maxime rem quibusdam vitae reprehenderit labore unde veniam tempora iusto et, rerum nobis recusandae distinctio soluta, ipsam in ullam hic cumque explicabo illo aut? Eius animi, sequi minus cum saepe debitis commodi culpa qui facilis voluptate molestiae molestias consequatur dignissimos soluta reprehenderit. Facere accusamus alias, optio ratione autem iure eveniet dolores saepe deserunt nostrum iusto fugiat quaerat perferendis maiores qui adipisci, excepturi incidunt! Inventore possimus facilis ex ipsum dignissimos eum natus laudantium cupiditate, quo, atque itaque beatae aspernatur labore aperiam velit. Officiis provident eaque nisi rem nostrum error! Repudiandae tempora voluptatem dignissimos fugiat voluptate iusto, natus ipsum minima, doloribus et aspernatur error nemo perferendis repellendus. Pariatur non aperiam ratione reprehenderit et repellat expedita!</p>
                </div>

                <div className="specialEffect">
                    <h4 className="specialText">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, blanditiis. dolor sit amet consectetur adipisicing elit. Sit, incidunt.</h4>
                </div>
                <div className="blogDescription">
                  <p className="small_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque, quia aperiam nam architecto corporis ad, at placeat facere sint sequi! Saepe repudiandae consectetur amet nihil quibusdam incidunt, aperiam expedita veritatis non harum quisquam at porro praesentium, debitis totam assumenda quaerat ea. Aliquid obcaecati natus distinctio nobis cum eius molestiae magni consequatur beatae eum ipsa, facilis aliquam rem? Provident, doloribus. Quos, aut ex beatae consequatur voluptatem expedita, officia autem dolores, facere eum voluptate laudantium cumque! Facilis cum sed, numquam saepe modi asperiores obcaecati. Tempora ducimus suscipit, nam reiciendis libero perferendis voluptas atque, fuga maxime doloremque iste quisquam explicabo, tenetur totam tempore at aperiam iusto amet praesentium nemo harum! Quidem ipsum rerum quae quaerat nulla perferendis eveniet facere, amet consequuntur eum sed dicta. Ipsum qui sed, sunt magni, facilis dolor vitae voluptatum accusamus nam sapiente quisquam consectetur eveniet exercitationem id? Temporibus minus, ipsum iusto labore officia molestiae porro. Omnis sequi soluta tempore dolor tenetur at? Atque incidunt minus omnis delectus laudantium eaque amet magni voluptatum? Quis aliquid illum autem veniam eaque velit nostrum. Esse inventore unde dolorum dolore error distinctio eum quidem rem! In cumque asperiores voluptatum minus? Maxime rem quibusdam vitae reprehenderit labore unde veniam tempora iusto et, rerum nobis recusandae distinctio soluta, ipsam in ullam hic cumque explicabo illo aut? Eius animi, sequi minus cum saepe debitis commodi culpa qui facilis voluptate molestiae molestias consequatur dignissimos soluta reprehenderit. Facere accusamus alias, optio ratione autem iure eveniet dolores saepe deserunt nostrum iusto fugiat quaerat perferendis maiores qui adipisci, excepturi incidunt! Inventore possimus facilis ex ipsum dignissimos eum natus laudantium cupiditate, quo, atque itaque beatae aspernatur labore aperiam velit. Officiis provident eaque nisi rem nostrum error! Repudiandae tempora voluptatem dignissimos fugiat voluptate iusto, natus ipsum minima, doloribus et aspernatur error nemo perferendis repellendus. Pariatur non aperiam ratione reprehenderit et repellat expedita!</p>
                </div>

                <div className="sharing">
                  <div className="tags">
                    <p className="shareText">Share : </p>
                    <i class="bi bi-instagram">I</i>
                    <i class="bi bi-facebook">F</i>
                    <i class="bi bi-whatsapp">W</i>
                  </div>
                  <div className="tags">
                    <p className="shareText">Tags : </p>
                    <p className="tag">Vehicle</p>
                    <p className="tag">Aluminium</p>
                  </div>
                </div>
                <div className="pageTitleContainer">
                        <h2 className="pageTitle">Related Blogs and Articles</h2>
                </div> 

                <div className="blogs_container">
                        <SingleBlog />
                        <SingleBlog />
                        <SingleBlog />
                </div>
        
        
        
        <Pagination/>
        <Feedback /> 
        
        
        </section>
    </>
  )
}
