import React from "react";

const Categories = ({categoryId, onChangeCategory}) => {
  // console.log(value)
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
  // const [activeIndex, setActiveIndex] = React.useState(0);

  // const onClickCategory = (index) => setActiveIndex(index);

  return (
    <div className="categories">
      <ul>
        {category.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={categoryId === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
