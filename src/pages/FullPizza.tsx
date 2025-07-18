import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://680b4870d5075a76d98a812e.mockapi.io/pizzas/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении данных о пицце");
        navigate("/");
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
