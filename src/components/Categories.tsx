import  { FC, memo } from "react";

type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (i: number) => void;
};

const category = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: FC<CategoriesProps> = memo((props) => {
  const { categoryId, onChangeCategory } = props;

  // console.log(value)
  // меню
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
});
