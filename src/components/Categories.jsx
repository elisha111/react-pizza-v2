import React from "react";

const Categories = () => {
  // меню
  const category = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // выбор категории
  const [activeIndex, setActiveIndex] = React.useState(0);

  // const onClickCategory = (index) => setActiveIndex(index);

  return (
    <div className="categories">
      <ul>
        {category.map((value, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
