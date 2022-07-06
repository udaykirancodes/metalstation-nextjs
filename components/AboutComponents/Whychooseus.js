import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Whychooseus = () => {
    return (
        <div className='ab'>
            <div className="container">
                <h1 className={abCss.Title}>Why Choose Us ?</h1>
                <div className={abCss.AboutChooseUs}>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                    <div className={abCss.AboutwhyChooseUs}>
                        <div className={abCss.AboutwhyChooseUs_inside}>
                            <div className={abCss.AboutwhyChooseUsImage}>

                                <Image layout='fill' src='/metal.png' alt="" />
                            </div>
                            <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>Lorem Ipsum</p></Link>
                        </div>
                        <p className={abCss.AboutwhyChooseUsText}>   ab. Repudiandae consequuntur distinctio quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam non veritatis? </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychooseus