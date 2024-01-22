import React from "react";

let steps = [
  {
    num: "01",
    head: "Tell us what you like (and what not)",
    para: "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
  },
  {
    num: "02",
    head: "Tell us what you like (and what not)",
    para: "Approve your weekly meal plan Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add you own recipes.",
  },
  {
    num: "03",
    head: "Receive meals at convenient time",
    para: "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
  },
];

let imgUrls = [];

for (let i = 1; i <= 3; i++) {
  let url = `img/app/app-screen-${i}.png`;
  imgUrls.push(url);
}

export default function How() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container how-it-works">
        {steps.map((step, index) => {
          let { num, head, para } = step;
          let splId = `step-how-${index + 1}`;
          return (
            <div className="step-text-box" id={splId} key={index}>
              <p className="step-number">{num}</p>
              <h3 className="heading-tertiary">{head}</h3>
              <p className="step-description">{para}</p>
            </div>
          );
        })}

        {imgUrls.map((imgUrl, index) => {
          let splId = `step-how-${index + 1}-${1}`;
          return (
            <div className="step-img-box" id={splId} key={index}>
              <img
                src={imgUrl}
                alt="iPhone app preferences selection screen"
                className="step-img"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
