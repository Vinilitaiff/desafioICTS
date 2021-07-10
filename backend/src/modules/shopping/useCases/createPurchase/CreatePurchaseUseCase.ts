import { inject, injectable } from "tsyringe";

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

interface IRequest {
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
}

@injectable()
class CreatePurchaseUseCase {
  constructor(
    @inject("PurchasesRepository")
    private purchasesRepository: IPurchasesRepository
  ) {}

  execute({ total, typeOfPurchase, status, product_id }: IRequest): void {
    this.purchasesRepository.create({
      total,
      typeOfPurchase,
      status,
      product_id,
    });
  }
}

export { CreatePurchaseUseCase };
