import { inject, injectable } from "tsyringe";

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

interface IRequest {
  id?: string;
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id?: string;
}

@injectable()
class UpdatePurchaseUseCase {
  constructor(
    @inject("PurchasesRepository")
    private purchasesRepository: IPurchasesRepository
  ) {}

  public async execute({
    id,
    total,
    typeOfPurchase,
    status,
  }: IRequest): Promise<void> {
    const purchase = await this.purchasesRepository.findById(id);

    purchase.total = total;
    purchase.typeOfPurchase = typeOfPurchase;
    purchase.status = status;

    this.purchasesRepository.save(purchase);
  }
}

export { UpdatePurchaseUseCase };
