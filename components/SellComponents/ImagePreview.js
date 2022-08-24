import React, { useState } from 'react'
import Image from 'next/image'
import iPCss from '../../styles/ImagePreview.module.css'
import sCss from '../../styles/Sell.module.css'
import { AddSellUrl } from "../../urls";
import { useRouter } from 'next/router';
const ImagePreview = ({ onSubmission, details, setDetails }) => {
  const [multipleFiles, setMultipleFiles] = useState('');
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const router = useRouter()
  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    }
  }

  const MultipleFileChange = (e) => {

    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setMultipleFiles(e.target.files);
    // setMultipleProgress(0);
  }

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  function deleteButton() {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const UploadMultipleFiles = async () => {
    let formdata = new FormData();
    // console.log(files)
    formdata.append('email', details.email)
    formdata.append('business', details.business);
    formdata.append('phone', details.phone)
    formdata.append('city', details.city)
    formdata.append('category', details.category)
    formdata.append('material', details.material)
    formdata.append('quantity', details.quantity)
    formdata.append('units', details.units)
    formdata.append('others', details.others)
    // here are the images 
    for (let i = 0; i < multipleFiles.length; i++) {
      formdata.append('images', multipleFiles[i]);
    }
    console.log(formdata.get('images'))
    console.log(formdata.get('images'))
    // await multipleFilesUpload(formdata, mulitpleFileOptions);
    // props.getMultiple();

    // send to server 
    const res = await fetch(AddSellUrl, {
      method: "POST",
      headers: {
        'boundary': 'MyBoundary'
      },
      body: formdata
    })
    const data = await res.json();
    if (data.success) {
      console.log(data.data);
      setDetails({})
      router.push('/')
    }
  }
  return (
    <div className="container">
      <section className={iPCss.ImagePreview}>
        {/* <div className={iPCss.ImageInputContainer}> */}
        <label className={iPCss.ImageLabel}>
          + Add Images
          <br />
          <input
            type="file"
            name="images"
            onChange={(e) => MultipleFileChange(e)}
            multiple
            accept="image/png , image/jpeg, image/webp, application/pdf"
            className={iPCss.ImagePreviewInput}
          />
        </label>
        <br />

        <input className={iPCss.ImagePreviewInput} type="file" multiple />

        {selectedImages.length === 0 ? "" : <div className={iPCss.images}>
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className={iPCss.image}>
                  <Image className={iPCss.preview} src={image}

                    height={200}
                    width={300}
                    alt="upload" />
                  <div className="ImgDelete">

                    <button className={iPCss.ImageDelete} onClick={() => deleteHandler(image)}>
                      x
                    </button>
                  </div>
                  <p className={iPCss.ImageP}>{index + 1}</p>
                </div>
              );
            })}
        </div>}
        <div className={sCss.buttons}>
          <button className={sCss.cancelbtn} onClick={() => deleteButton()}>Cancel</button>
          <button className={sCss.savebtn}>Save as draft</button>
          <button className={sCss.submitbtn} onClick={() => UploadMultipleFiles()}>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default ImagePreview
