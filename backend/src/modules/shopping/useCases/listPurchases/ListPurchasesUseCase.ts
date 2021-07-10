import { inject, injectable } from "tsyringe";

import { Purchase } from "../../entities/Purchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
class ListPurchasesUseCase {
  constructor(
    @inject("PurchasesRepository")
    private purchasesRepository: IPurchasesRepository
  ) {}

  async execute(): Promise<Purchase[]> {
    const purchases = await this.purchasesRepository.list();

    return purchases;
  }
}

export { ListPurchasesUseCase };
