import React, { Component } from 'react';
import sCss from '../../styles/Sell.module.css'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class MultipleImageUploadComponent extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    render() {
        return (
            <div className={sCss.sell_multi}>
            <div className="container">
                <form className={sCss.imgForm}>
                    <div className={sCss.inputContianer}>
                        <div className={`form-group ${sCss.input_img}`}>
                            <input type="file" className={`form-control ${sCss.input_control}`} onChange={this.uploadMultipleFiles} multiple />
                        </div>
                        {/* <div className={sCss.img}> */}
                        <Carousel className={sCss.img}>
                            {(this.fileArray || []).map(url => (<div className={`form-group multi-preview ${sCss.multi}`}>

                                <Image layout='fill' src={url} alt="..." />

                            </div>))}
                        </Carousel>
                        {/* </div> */}

                    </div>
                    <div className={sCss.buttons}>
                        <button className={sCss.cancelbtn}>Cancel</button>
                        <button className={sCss.savebtn}>Save as draft</button>
                        <button className={sCss.submitbtn} onClick={this.uploadFiles}>Submit</button>
                    </div>
                </form >
            </div>
            </div>
        )
    }
}