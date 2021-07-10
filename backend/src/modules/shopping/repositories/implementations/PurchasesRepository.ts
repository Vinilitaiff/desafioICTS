import { getRepository, Repository } from "typeorm";

import { Purchase } from "../../entities/Purchase";
import {
  IPurchasesRepository,
  IPurchasesRepositoryDTO,
} from "../IPurchasesRepository";

class PurchasesRepository implements IPurchasesRepository {
  private repository: Repository<Purchase>;

  constructor() {
    this.repository = getRepository(Purchase);
  }

  async findById(id: string): Promise<Purchase> {
    const purchase = await this.repository.findOne(id);

    return purchase;
  }

  async list(): Promise<Purchase[]> {
    const purchase = await this.repository.find();
    return purchase;
  }

  async create({
    total,
    typeOfPurchase,
    status,
    product_id,
  }: IPurchasesRepositoryDTO): Promise<Purchase> {
    const purchase = this.repository.create({
      total,
      typeOfPurchase,
      status,
      product_id,
    });
    await this.repository.save(purchase);

    return purchase;
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  public async save(purchase: Purchase): Promise<Purchase> {
    return this.repository.save(purchase);
  }
}

export { PurchasesRepository };
