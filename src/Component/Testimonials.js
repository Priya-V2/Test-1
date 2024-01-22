import React from "react";

const customerDetails = [
  {
    cusName: "Dave Bryson",
    review:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
  },
  {
    cusName: "Ben Hadley",
    review:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
  },
  {
    cusName: "Steve Miller",
    review:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
  },
  {
    cusName: "Hannah Smith",
    review:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
  },
];

let galleryImgUrl = [];
for (let i = 1; i <= 12; i++) {
  galleryImgUrl.push(`img/gallery/gallery-${i}.jpg`);
}

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="testimonials-container">
        <span className="subheading">testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className="testimonials">
          {customerDetails.map((customerDetail, figureIndex) => {
            let { cusName, review } = customerDetail;
            let imgUrl = `img/customers/${cusName
                .split(" ")
                .shift()
                .toLowerCase()}.jpg`,
              altStr = `Photo of a customer ${cusName}`;
            return (
              <figure className="testimonial" key={figureIndex}>
                <img className="testimonial-img" src={imgUrl} alt={altStr} />

                <blockquote className="testimonial-text">{review}</blockquote>
                <p className="testimonial-name">- {cusName}</p>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="gallery">
        {galleryImgUrl.map((url, imgIndex) => {
          return (
            <figure className="gallery-item" key={imgIndex}>
              <img src={url} alt="Photo of beautifully arranged food" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
