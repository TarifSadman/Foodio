import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState("*");
  const isotopeContainerRef = useRef(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:3990/menu/menu-items');
        const data = await response.json();
        if (response.ok) {
          setMenuItems(data.menuItems);
        } else {
          console.error('Failed to fetch menu items:', data.message);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  useEffect(() => {
    const isotope = new Isotope(isotopeContainerRef.current, {
      itemSelector: ".menu-item",
      layoutMode: "masonry",
    });

    isotope.arrange({ filter });

    return () => isotope.destroy();
  }, [filter, menuItems]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  console.log("Amplify Test");
  

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
              <img src={item.img_src} className="menu-img" alt={item.title} />
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
