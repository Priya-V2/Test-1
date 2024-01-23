import React from "react";

const heroText = {
  head: "A healthy meal delivered to your door, every single day",
  description:
    "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
  btnFull: "Start Eating Well",
  btnOutline: "Learn more →",
};
let imgUrls = [];

for (let i = 1; i <= 6; i++) {
  let url = `img/customers/customer-${i}.jpg`;
  imgUrls.push(url);
}

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">{heroText.head}</h1>
          <p className="hero-description">{heroText.description}</p>
          <a href="#" className="btn btn-full margin-right-sm">
            {heroText.btnFull}
          </a>
          <a href="#" className="btn btn-outline">
            {heroText.btnOutline}
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              {imgUrls.map((imgUrl, index) => {
                return <img src={imgUrl} alt="customer photo" key={index} />;
              })}
            </div>
            <div className="delivered-text">
              <span className="span">250,000+</span> meals delivered last year!
            </div>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src="img/hero.png"
            className="hero-img"
            alt="Woman enjoying food,
          meals in storage container, and food bowls on a table"
          />
        </div>
      </div>
    </section>
  );
}
