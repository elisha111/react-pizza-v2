export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  category: string;
  order: string;
  search: string;
  currentPage: number;
};
