import React from "react";

const pricingDetails = [
    {
      name: "starter",
      price: "399",
      perMeal: "That's just $13 per meal!",
      include: [
        {
          "checkmark-outline 1": "1 meal per day",
        },
        { "checkmark-outline 2": "Order from 11am and 9pm" },
        { "checkmark-outline 3": "Delivery is free" },
        { "close-outline 4": "Get access to latest recipes" },
      ],
    },
    {
      name: "complete",
      price: "649",
      perMeal: "That's just $11 per meal!",
      include: [
        {
          "checkmark-outline 1": "2 meals per day",
        },
        { "checkmark-outline 2": "Order 24/7" },
        { "checkmark-outline 3": "Delivery is free" },
        { "checkmark-outline 4": "Get access to latest recipes" },
      ],
    },
  ],
  benefits = [
    {
      iconName: "infinite-outline",
      head: "Never cook again!",
      detail:
        "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      iconName: "nutrition-outline",
      head: "Local and organic",
      detail:
        "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      iconName: "leaf-outline",
      head: "No waste",
      detail:
        "All our partners only use reusable containers to package all your meals.",
    },
    {
      iconName: "pause-outline",
      head: "Pause anytime",
      detail:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];

export default function Pricing() {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container plan-grid margin-bottom-md">
        {pricingDetails.map((pricingDetail, index) => {
          let { name, price, perMeal, include } = pricingDetail;
          let divClassName = `pricing-plan pricing-plan-${name}`;
          return (
            <div className={divClassName} key={index}>
              <header className="plan-header">
                <p className="plan-name">{name}</p>
                <ul className="unorder-li">
                  <li className="dolar-symbol">$</li>
                  <li className="amount">{price}</li>
                  <li className="period">/month</li>
                </ul>
                <p className="plan-text">{perMeal}</p>
              </header>

              <ul className="list">
                {include.map((data, liIndex) => {
                  for (const [name, details] of Object.entries(data)) {
                    let iconName = name.split(" ").shift();
                    return (
                      <li className="list-item" key={liIndex}>
                        <ion-icon
                          className={"list-icon"}
                          name={iconName}
                        ></ion-icon>
                        <span>{details}</span>
                      </li>
                    );
                  }
                })}
              </ul>
              <div className="plan-sign-up">
                <a className="btn btn-full" href="#">
                  Start eating well
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <aside className="plan-details">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </aside>
      <div className="container grid grid-4-cols">
        {benefits.map((benefit, featureIndex) => {
          let { iconName, head, detail } = benefit;
          return (
            <div className="feature" key={featureIndex}>
              <ion-icon className="feature-icon" name={iconName}></ion-icon>
              <p className="feature-title">{head}</p>
              <p className="feature-text">{detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
