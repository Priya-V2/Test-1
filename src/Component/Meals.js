import React from "react";

const mealImg = [
    {
      imgCategory: [`Vegetarian`],
      imgUrl: "img/meals/meal-1.jpg",
      imgName: "Japanese Gyozas",
      str: "spanStr1",
    },
    {
      imgCategory: [`Vegan`, `Paleo`],
      imgUrl: "img/meals/meal-2.jpg",
      imgName: "Avocado Salad",
      str: "spanStr2",
    },
  ],
  mealDetails = [
    {
      iconName: "flame-outline",
      spanStr1: `650 calories`,
      spanStr2: `400 calories`,
    },
    {
      iconName: "restaurant-outline",
      spanStr1: `NutriScore ® 74`,
      spanStr2: `NutriScore ® 92`,
    },
    {
      iconName: "star-outline",
      spanStr1: `4.9 rating [537]`,
      spanStr2: `4.8 rating [441]`,
    },
  ],
  dietNames = [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Gluten-free",
    "Lactose-free",
    "Keto",
    "Paleo",
    "Low FODMAP",
    "Kid-friendly",
  ];

export default function Meals() {
  return (
    <section className="section-meals">
      <div className="container center">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid-3-cols margin-bottom-md">
        {mealImg.map((data, divIndex) => {
          let { imgCategory, imgName, imgUrl, str } = data;
          return (
            <div className="meal" key={divIndex}>
              <img src={imgUrl} alt={imgName} className="meal-img" />
              <div className="meal-content">
                <div className="meal-tags">
                  {imgCategory.map((data, tagIndex) => {
                    let clName = `tag tag-${data.toLowerCase()}`;
                    return (
                      <span className={clName} key={tagIndex}>
                        {data}
                      </span>
                    );
                  })}
                </div>
                <p className="meal-title">{imgName}</p>
                <ul className="meal-attributes">
                  {mealDetails.map((strData, index) => {
                    let { iconName } = strData;
                    return (
                      <li className="meal-attribute" key={index}>
                        <ion-icon
                          className="meal-icon"
                          name={iconName}
                        ></ion-icon>
                        <span>{strData[str]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        <div className="diet">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            {dietNames.map((dietName, liIndex) => {
              return (
                <li className="list-item" key={liIndex}>
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>{dietName}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}
