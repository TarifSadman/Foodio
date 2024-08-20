import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const menuItems = [
  {
    id: 1,
    imgSrc: "assets/img/menu/lobster-bisque.jpg",
    title: "Lobster Bisque",
    price: "$5.95",
    description: "Lorem, deren, trataro, filede, nerada",
    category: "filter-starters",
  },
  {
    id: 2,
    imgSrc: "assets/img/menu/bread-barrel.jpg",
    title: "Bread Barrel",
    price: "$6.95",
    description: "Lorem, deren, trataro, filede, nerada",
    category: "filter-specialty",
  },
  {
    id: 3,
    imgSrc: "assets/img/menu/cake.jpg",
    title: "Crab Cake",
    price: "$7.95",
    description:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
    category: "filter-starters",
  },
  {
    id: 4,
    imgSrc: "assets/img/menu/caesar.jpg",
    title: "Caesar Selections",
    price: "$8.95",
    description: "Lorem, deren, trataro, filede, nerada",
    category: "filter-salads",
  },
  {
    id: 5,
    imgSrc: "assets/img/menu/tuscan-grilled.jpg",
    title: "Tuscan Grilled",
    price: "$9.95",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
    category: "filter-specialty",
  },
  {
    id: 6,
    imgSrc: "assets/img/menu/mozzarella.jpg",
    title: "Mozzarella Stick",
    price: "$4.95",
    description: "Lorem, deren, trataro, filede, nerada",
    category: "filter-starters",
  },
  {
    id: 7,
    imgSrc: "assets/img/menu/greek-salad.jpg",
    title: "Greek Salad",
    price: "$9.95",
    description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
    category: "filter-salads",
  },
  {
    id: 8,
    imgSrc: "assets/img/menu/spinach-salad.jpg",
    title: "Spinach Salad",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    category: "filter-salads",
  },
  {
    id: 9,
    imgSrc: "assets/img/menu/lobster-roll.jpg",
    title: "Lobster Roll",
    price: "$12.95",
    description:
      "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
    category: "filter-specialty",
  },
];

export default function Menu() {
  const [filter, setFilter] = useState("*");
  const isotopeContainerRef = useRef(null);

  useEffect(() => {
    const isotope = new Isotope(isotopeContainerRef.current, {
      itemSelector: ".menu-item",
      layoutMode: "masonry",
    });

    isotope.arrange({ filter });

    return () => isotope.destroy();
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Menu</h2>
        <div>
          <span>Check Our Tasty</span>{" "}
          <span className="description-title">Menu</span>
        </div>
      </div>
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="menu-filters">
              <li
                onClick={() => handleFilterChange("*")}
                className={filter === "*" ? "filter-active" : ""}
              >
                All
              </li>
              <li
                onClick={() => handleFilterChange(".filter-starters")}
                className={filter === ".filter-starters" ? "filter-active" : ""}
              >
                Starters
              </li>
              <li
                onClick={() => handleFilterChange(".filter-salads")}
                className={filter === ".filter-salads" ? "filter-active" : ""}
              >
                Salads
              </li>
              <li
                onClick={() => handleFilterChange(".filter-specialty")}
                className={
                  filter === ".filter-specialty" ? "filter-active" : ""
                }
              >
                Specialty
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row"
          ref={isotopeContainerRef}
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-6 menu-item ${item.category}`}
            >
              <img src={item.imgSrc} className="menu-img" alt={item.title} />
              <div className="menu-content">
                <a href="#">{item.title}</a>
                <span>{item.price}</span>
              </div>
              <div className="menu-ingredients">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
