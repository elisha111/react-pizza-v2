import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
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
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        perferendis exercitationem enim accusamus sed, pariatur unde alias a rem
        deserunt dolorum voluptatem, facere repudiandae sint laboriosam tempora
        nihil nobis eligendi?
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
