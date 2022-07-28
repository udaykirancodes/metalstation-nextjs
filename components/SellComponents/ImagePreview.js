import React, { useState } from 'react'
import iPCss from '../../styles/ImagePreview.module.css'
import sCss from '../../styles/Sell.module.css'

const ImagePreview = ({onSubmission}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const uploadFiles=()=>{

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
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp, application/pdf"
            className={iPCss.ImagePreviewInput}
          />
        </label>
        <br />

        <input className={iPCss.ImagePreviewInput} type="file" multiple />
        {/* </div> */}

        {/* {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : ( */}
        {/* {selectedImages.length == 0 ? "" : <button
          className={iPCss.uploadbtn}
          onClick={() => {
            console.log(selectedImages);
          }}
        >
          UPLOAD {selectedImages.length} IMAGE
          {selectedImages.length === 1 ? "" : "S"}
        </button>} */}
        {/* // ))} */}

        {selectedImages.length===0? "": <div className={iPCss.images}>
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className={iPCss.image}>
                  <img className={iPCss.preview} src={image} height="200" alt="upload" />
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
        <button className={sCss.cancelbtn}>Cancel</button>
        <button className={sCss.savebtn}>Save as draft</button>
        <button className={sCss.submitbtn} onClick={onSubmission}>Submit</button>
      </div>
      </section>
    </div>
  );
}

export default ImagePreview
