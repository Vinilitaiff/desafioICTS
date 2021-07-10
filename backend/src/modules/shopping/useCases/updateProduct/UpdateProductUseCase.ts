import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
  name: string;
  description: string;
  price: number;
  id?: string;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    id,
    name,
    description,
    price,
  }: IRequest): Promise<void> {
    const product = await this.productsRepository.findById(id);
    console.log(product);

    product.name = name;
    product.description = description;
    product.price = price;

    this.productsRepository.save(product);
  }
}

export { UpdateProductUseCase };
