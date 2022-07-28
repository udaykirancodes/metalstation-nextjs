import React, { useState } from 'react'
import sCss from '../../styles/Sell.module.css'
import ImagePreview from './ImagePreview';


const Sellimg = ({onSubmission}) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body
    });
  };
  return (
    <>
      <section className={sCss.imageSection}>
        <div className="container">
          <h4 className={sCss.Sellheader}>Add some images of the product you want to sell</h4>
          <div className="upload_img_container">
            {/* <img className={sCss.previewImg} src={createObjectURL} />
            <h4>Select Image</h4>
            <input type="file" name="myImage" onChange={uploadToClient} multiple /> */}
            {/* <MultipleImageUploadComponent onSubmission={onSubmission}/> */}
            <ImagePreview onSubmission={onSubmission}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sellimg