export interface CreatedAt {
  seconds: number;
  nanoseconds: number;
}

export interface Product {
  id: string;
  imageURL: string;
  price: number;
  rating: number;
  title: string;
}

export interface OrderType {
  id: string;
  data: {
    amount: number;
    createdAt: CreatedAt;
    basket: Product[];
  };
}
