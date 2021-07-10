import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  name: string;
  description: string;
  price: number;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({ name, description, price }: IRequest): Promise<void> {
    this.productsRepository.create({ name, description, price });
  }
}

export { CreateProductUseCase };
