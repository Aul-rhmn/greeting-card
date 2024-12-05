import React, { forwardRef } from "react";

const CardPrev = forwardRef(({ cardData }, ref) => {
  const { dear, message, from, image } = cardData;

  return (
    <div
      ref={ref}
      className="card-container mx-auto shadow-sm"
      style={{
        position: "relative",
        maxWidth: "500px",
        width: "100%",
        height: "auto",
        border: "2px solid #873d0f",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {image && (
        <img
          src={image}
          alt="Uploaded"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textShadow: "2px 2px 5px #000",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <h4 className="mb-3">Dear {dear},</h4>
        <p className="mb-3">{message}</p>
        <p className="from mb-0"> {from}</p>
      </div>
    </div>
  );
});

export default CardPrev;
