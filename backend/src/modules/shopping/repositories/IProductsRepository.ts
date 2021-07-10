import { Product } from "../entities/Product";

interface ICreateProductDTO {
  name: string;
  price: number;
  description: string;
  id?: string;
}

interface IProductsRepository {
  findById(id: string): Promise<Product>;
  list(): Promise<Product[]>;
  create({ name, price, description }: ICreateProductDTO): Promise<void>;
  delete(id: string): Promise<void>;
  save(product: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository, ICreateProductDTO };
