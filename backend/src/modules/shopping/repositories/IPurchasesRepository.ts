import { Purchase } from "../entities/Purchase";

interface IPurchasesRepositoryDTO {
  total: number;
  typeOfPurchase: string;
  status: string;
  product_id: string;
  purchase_id?: string;
}

interface IPurchasesRepository {
  list(): Promise<Purchase[] | undefined>;
  create({
    total,
    typeOfPurchase,
    status,
    product_id,
  }: IPurchasesRepositoryDTO): Promise<Purchase>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Purchase>;
  save(purchase: Purchase): Promise<Purchase>;
}

export { IPurchasesRepository, IPurchasesRepositoryDTO };
