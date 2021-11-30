export interface ProductInfo {
  id: number;
  title: string;
  price: string;
  picture: string;
  picture_2?: string
}

export interface PropsType {
  items: ProductInfo[];
}
