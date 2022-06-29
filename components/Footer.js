import React from 'react'
import footCss from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={footCss.footer}>
                <div className={footCss.footerHeader}>
                    <img className={footCss.footerHeaderImage} src='/Metal_Station_Logo.png' alt="" />
                    <p className={footCss.footerHeader}> <i className="fa-solid fa-star"></i> Trusted by 50,000+ customers</p>
                </div>
                <div className={footCss.footerInfo}>
                    <div className={footCss.footerBuy}>
                        <h3 className={footCss.footerInfoHeader}>Buy our products</h3>
                        <ul className={footCss.list}>
                            <li className="buylist">Buys from Categories</li>
                            <li className="buylist">Buys from Featured Products</li>
                            <li className="buylist">Buy Scrap</li>
                        </ul>
                    </div>
                    <div className={footCss.footerSell}>
                        <h3 className={footCss.footerInfoHeader}>Sell Your Products</h3>
                        <ul className={footCss.list}>
                            <li className="selllist">Sell Car</li>
                            <li className="selllist">Sell Bike</li>
                            <li className="selllist">Sell Scrap</li>
                        </ul>
                    </div>
                    <div className={footCss.footerScarp}>
                        <h3 className={footCss.footerInfoHeader}>Scrap Your Vehicle</h3>
                        <ul className={footCss.list}>
                            <li className="scraplist">Scrap Your Car</li>
                            <li className="scraplist">Scrap Your Bike</li>
                        </ul>
                    </div>
                    <div className={footCss.footerContact}>
                        <h3 className={footCss.footerInfoHeader}>Contact Us</h3>
                        <ul className={footCss.list}>
                            <li className="contactlist">Whatsapp +91 9381400582</li>
                            <li className="contactlist">bismillaenterprices@gmail.com</li>
                        </ul>
                    </div>
                    <div className={footCss.footerFollow}>
                        <h3 className={footCss.footerInfoHeader}>FOLLOW US ON</h3>
                        <div className={footCss.followIcon}>
                        <i className="fa-brands fa-youtube mx-2 h4"></i>
                        <i className="fa-brands fa-instagram-square mx-2 h4"></i>
                        <i className="fa-brands fa-linkedin-in mx-2 h4"></i>
                        <i className="fa-brands fa-twitter mx-2 h4"></i>
                        <i className="fa-brands fa-facebook-f mx-2 h4"></i>
                        </div>
                    </div>
                </div>
                <div className={footCss.footerLastText}>
                    <p className={footCss.lastText}><i className="fa-solid fa-copyright"></i> All Rights Reserved @bismillaenterprises. Privacy, Terms of use, Security Overview</p>
                </div>
            </footer>

            
        </>
    )
}

export default Footer