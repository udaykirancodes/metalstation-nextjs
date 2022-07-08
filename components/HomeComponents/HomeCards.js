import React from 'react'
import Image from 'next/image'
export default function HomeCards() {
  return (
    <>
        {/* cards */}
        <div className="page">
            <div className="container home_card_container">
                    <div className="home_card">
                            <div className="home_card_top">
                                    <div className="home_card_image_container">
                                            <Image alt="Image" src="/metal.png" layout='fill'  />
                                    </div>
                                    <div className="home_card_title_container">
                                        <h3 className="home_card_title">Buy Scrap</h3>
                                    </div>
                            </div>
                            <div className="home_card_bottom">
                                    <p className="home_card_description"> Non ratione fugiat mollitia eligendi nobis unde delectus magnam dolor cum distinctio.</p>
                            </div>

                    </div>
                    <div className="home_card">
                            <div className="home_card_top">
                                    <div className="home_card_image_container">
                                            <Image alt="Image" src="/metal.png" layout='fill'  />
                                    </div>
                                    <div className="home_card_title_container">
                                        <h3 className="home_card_title">Sell Scrap</h3>
                                    </div>
                            </div>
                            <div className="home_card_bottom">
                                    <p className="home_card_description">
                                    Non ratione fugiat mollitia eligendi nobis unde delectus magnam dolor cum distinctio.
                                    </p>
                            </div>

                    </div>
                    <div className="home_card">
                            <div className="home_card_top">
                                    <div className="home_card_image_container">
                                            <Image alt="Image" src="/metal.png" layout='fill'  />
                                    </div>
                                    <div className="home_card_title_container">
                                        <h3 className="home_card_title">Optional</h3>
                                    </div>
                            </div>
                            <div className="home_card_bottom">
                                    <p className="home_card_description">eligendi nobis unde delectus magnam dolor cum distinctio.</p>
                            </div>

                    </div>
            </div>
        </div>


        {/* whatsapp icon & redirecting link */}
        <a target="_blank" rel="noreferrer" href="https://wa.me/+918977672395?text=Welcome to Metal Station. Send your queries"> 
                <div className="floating">
                        <div className="floating_text_container">
                                <p className="floating_text category">Want to ask doubts?</p>
                        </div>
                        <div className="floating_icon_container center">
                                <i className="uil uil-whatsapp floating_icon"></i>
                        </div>
                </div>
        </a>
    </>
  )
}