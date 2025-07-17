import { FC, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import Categories from "../components/Categories";
import Sort from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { useAppDispatch } from "../redux/store";
import { selectPizzaData } from "../redux/pizza/selectors";
import { selectFilter } from "../redux/filter/selectors";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items: pizzas, status } = useSelector(selectPizzaData);

  const isSearch = useRef(false);
  // const isMounted = useRef(false);
  // const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const onChangeCategory = useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch]
  );

  // const [pizzas, setPizzas] = React.useState([]);
  // вывод скелетона

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = useCallback(async () => {
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      })
    );
  }, [categoryId, currentPage, dispatch, searchValue, sort.sortProperty]);

  // если изменили параметры и был первый рендер, то будет этой useEffect
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }

  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage, navigate]);

  // если был первый рендер, то проверяем параметров url и сохраняем в redux
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams;

  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: params.currentPage,
  //         sort: sort || sortList[0],
  //       })
  //     );
  //   }

  //   isSearch.current = true;
  // }, [dispatch]);

  // Если был первый рендер, то получаем все пиццы
  useEffect(() => {
    window.scrollTo(0, 0);

    getPizzas();

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage, getPizzas]);

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const items = pizzas.map((item: any) => (
    <PizzaBlock key={item.id} {...item} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению не удалось получить пиццы! <br />
            Попробуйте повторить попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : items}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
