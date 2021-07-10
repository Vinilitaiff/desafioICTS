import { inject, injectable } from "tsyringe";

import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class FindProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(product_id: string): Promise<Product> {
    const products = await this.productsRepository.findById(product_id);

    return products;
  }
}

export { FindProductsUseCase };
