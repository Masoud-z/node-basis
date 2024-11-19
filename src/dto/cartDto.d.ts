export interface CartDto {
  products: { id: string; qty: number }[];
  totalPrice: number;
}
