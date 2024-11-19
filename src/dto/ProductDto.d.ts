export interface ProductDto {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  id: string;
}

export interface GetProductParams {
  productId: string;
}
