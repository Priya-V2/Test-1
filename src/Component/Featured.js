import React from "react";
const featuredLogoData = [
  {
    src: "img/logos/techcrunch.png",
    alt: "Techcrunch Logo",
  },
  {
    src: "img/logos/business-insider.png",
    alt: "Business Insider Logo",
  },
  {
    src: "img/logos/the-new-york-times.png",
    alt: "The New York times Logo",
  },
  {
    src: "img/logos/forbes.png",
    alt: "Forbes Logo",
  },
  {
    src: "img/logos/usa-today.png",
    alt: "USA Today Logo",
  },
];

export default function Featured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          {featuredLogoData.map((data, index) => {
            let { src, alt } = data;
            return <img src={src} alt={alt} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
