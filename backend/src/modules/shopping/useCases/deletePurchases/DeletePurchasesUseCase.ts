import { inject, injectable } from "tsyringe";

import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
class DeletePurchasesUseCase {
  constructor(
    @inject("PurchasesRepository")
    private purchasesRepository: IPurchasesRepository
  ) {}

  public async execute(purchase_id: string): Promise<void> {
    await this.purchasesRepository.delete(purchase_id);
  }
}

export { DeletePurchasesUseCase };
