import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class DeleteProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(product_id: string): Promise<void> {
    await this.productsRepository.delete(product_id);
  }
}

export { DeleteProductsUseCase };
