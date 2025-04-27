import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  // запрос на https://680b4870d5075a76d98a812e.mockapi.io/pizzas
  const [pizzas, setPizzas] = React.useState([]);

  // вывод скелетона
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://680b4870d5075a76d98a812e.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div lassName="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
