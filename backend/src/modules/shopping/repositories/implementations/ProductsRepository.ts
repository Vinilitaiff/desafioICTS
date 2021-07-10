import { getRepository, Repository } from "typeorm";

import { Product } from "../../entities/Product";
import { ICreateProductDTO, IProductsRepository } from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  save(product: ICreateProductDTO): Promise<Product> {
    return this.repository.save(product);
  }

  async create({ name, price, description }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      name,
      price,
      description,
    });

    await this.repository.save(product);
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);

    return product;
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ProductsRepository };
