import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";
import GreetingCardPrev from "./CardPrev";
import { useDropzone } from "react-dropzone";
import { Fade } from "react-awesome-reveal";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [cardData, setCardData] = useState({});
  const [showCard, setShowCard] = useState(false);
  const canvasRef = useRef();

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
    },
  });

  const onSubmit = (data) => {
    setCardData({ ...data, image: uploadedImage });
    setShowCard(true);
  };

  const downloadCard = async () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = await html2canvas(canvas);
      const link = document.createElement("a");
      link.download = "gift-card.jpg";
      link.href = image.toDataURL();
      link.click();
    }
  };

  return (
    <Fade>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here</p>
              ) : (
                <div>
                  <div className="upload-icon"></div>
                  <p>Browse Files</p>
                  <p>Drag and drop files here</p>
                </div>
              )}
            </div>

            {uploadedImage && (
              <div className="image-preview text-center">
                <img
                  src={uploadedImage}
                  alt="Uploaded preview"
                  className="img-fluid mt-3 mb-3"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="dear">Dear</label>
              <input
                id="dear"
                type="text"
                {...register("dear", { required: "Dear field is required" })}
                className="form-control"
              />
              {errors.dear && (
                <p className="text-danger">{errors.dear.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="form-control"
              />
              {errors.message && (
                <p className="text-danger">{errors.message.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="from">From</label>
              <input
                id="from"
                type="text"
                {...register("from", { required: "From field is required" })}
                className="form-control"
              />
              {errors.from && (
                <p className="text-danger">{errors.from.message}</p>
              )}
            </div>

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary">
                Generate Card
              </button>
            </div>
          </form>
        </div>

        {showCard && (
          <Fade>
            <div className="col-md-12 text-center">
              <GreetingCardPrev ref={canvasRef} cardData={cardData} />
              <button className="btn btn-success mt-4" onClick={downloadCard}>
                Download
              </button>
            </div>
          </Fade>
        )}
      </div>
    </Fade>
  );
};

export default CardForm;
